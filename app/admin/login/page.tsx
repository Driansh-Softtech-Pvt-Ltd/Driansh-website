import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import LoginForm from "@/components/admin/LoginForm";

export default async function AdminLoginPage() {
  if (await isAdmin()) redirect("/admin/leads");
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <p className="eyebrow text-brand">Driansh Admin</p>
        <h1 className="heading-3 mt-2 mb-6 text-ink">Sign in to view leads</h1>
        <LoginForm />
      </div>
    </main>
  );
}
