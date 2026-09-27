import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/services/web-development");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
