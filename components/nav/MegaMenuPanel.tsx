import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NavGroup, NavLink, NavMenu } from "@/constants/index";

const GROUP_WIDTH = { 1: "flex-1", 2: "flex-[2]", 3: "flex-[3]" } as const;
const LIST_COLUMNS = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3" } as const;

function FeaturedCard({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="group block rounded-2xl border border-gray-100 bg-surface p-4 transition-colors hover:border-brand/30 hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-brand"
    >
      <span className="flex items-center justify-between gap-2 font-semibold text-ink group-hover:text-brand">
        {link.label}
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </span>
      {link.description && <span className="mt-1 block text-sm leading-snug text-gray-600">{link.description}</span>}
    </Link>
  );
}

function Group({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  const columns = group.columns ?? 1;
  const titleClass = "block text-xs font-semibold uppercase tracking-wider text-gray-500";

  return (
    <div className={`min-w-0 ${GROUP_WIDTH[columns]}`}>
      {group.href ? (
        <Link href={group.href} onClick={onNavigate} className={`${titleClass} hover:text-brand`}>
          {group.title}
        </Link>
      ) : (
        <p className={titleClass}>{group.title}</p>
      )}
      <ul className={`mt-3 grid gap-x-6 gap-y-1 ${LIST_COLUMNS[columns]}`}>
        {group.links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className={
                link.description
                  ? "group -mx-3 block rounded-xl p-3 transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-brand"
                  : "block rounded-md py-1 text-sm text-gray-800 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
              }
            >
              {link.description ? (
                <>
                  <span className="font-semibold text-ink group-hover:text-brand">{link.label}</span>
                  <span className="mt-1 block text-sm leading-snug text-gray-600">{link.description}</span>
                </>
              ) : (
                link.label
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MegaMenuPanel({ menu, onNavigate }: { menu: NavMenu; onNavigate: () => void }) {
  return (
    <div className="mx-auto flex max-h-[calc(100vh-6rem)] max-w-7xl gap-10 overflow-y-auto px-6 py-8 xl:px-8">
      {menu.featured && (
        <div className="w-60 shrink-0 space-y-3">
          {menu.featured.map((link) => (
            <FeaturedCard key={link.href} link={link} onNavigate={onNavigate} />
          ))}
        </div>
      )}
      <div className="flex min-w-0 flex-1 gap-8">
        {menu.groups?.map((group) => (
          <Group key={group.title} group={group} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}
