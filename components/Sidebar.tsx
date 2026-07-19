import Link from "next/link";
import { getAllCategories } from "@/lib/kb";

export default function Sidebar({ activeCategory }: { activeCategory?: string }) {
  const categories = getAllCategories();

  return (
    <nav aria-label="Categories" className="w-full">
      <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
        Index
      </p>
      <ul className="space-y-1">
        {categories.map((c) => {
          const isActive = c.slug === activeCategory;
          return (
            <li key={c.slug}>
              <Link
                href={`/learn/${c.slug}`}
                className={
                  "group flex items-baseline justify-between gap-2 rounded-sm px-3 py-2 text-sm transition-colors " +
                  (isActive
                    ? "bg-[var(--ink)] text-[var(--paper)]"
                    : "text-[var(--ink)] hover:bg-[var(--paper-raised)] border border-transparent hover:border-[var(--rule)]")
                }
              >
                <span className="font-display font-semibold">{c.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
