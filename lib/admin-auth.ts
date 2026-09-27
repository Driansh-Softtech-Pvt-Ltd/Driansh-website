import { createHash, createHmac } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { safeEqual } from "@/lib/security";

export const ADMIN_COOKIE = "driansh_admin";
const SESSION_SECONDS = 7 * 24 * 60 * 60;

function signingKey(): Buffer | null {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  // Derived from the password, so changing ADMIN_PASSWORD signs everyone out.
  return createHash("sha256").update(`driansh-admin|${password}`).digest();
}

function sign(expires: string, key: Buffer): string {
  return createHmac("sha256", key).update(expires).digest("hex");
}

export function checkPassword(input: string): boolean {
  const password = process.env.ADMIN_PASSWORD;
  return Boolean(password) && safeEqual(input, password as string);
}

export async function createSession(): Promise<void> {
  const key = signingKey();
  if (!key) throw new Error("ADMIN_PASSWORD is not configured");
  const expires = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
  (await cookies()).set(ADMIN_COOKIE, `${expires}.${sign(expires, key)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_SECONDS,
  });
}

export async function destroySession(): Promise<void> {
  (await cookies()).delete(ADMIN_COOKIE);
}

export async function isAdmin(): Promise<boolean> {
  const key = signingKey();
  const value = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!key || !value) return false;
  const [expires, signature] = value.split(".");
  if (!expires || !signature || Number(expires) * 1000 < Date.now()) return false;
  return safeEqual(signature, sign(expires, key));
}

/** Use at the top of every admin page and admin server action. */
export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) redirect("/admin/login");
}
