import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import { getAllCategories, getAllArticles } from "@/lib/kb";

export default function Home() {
  const categories = getAllCategories();
  const recent = [...getAllArticles()].sort(
    (a, b) => +new Date(b.lastUpdated) - +new Date(a.lastUpdated)
  );

  return (
    <div>
      {/* Hero: an open ledger spread */}
      <section className="border-b border-[var(--rule)] bg-[var(--paper-raised)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <span className="stamp-badge mb-5 inline-flex">Updated for FY 2026–27</span>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Every section, rule, and due date — indexed for the answer you need right now.
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--ink-soft)]">
            A reference built for accountants under pressure: type a section number
            or a term and get the exact clause, formula, or filing rule — no
            scrolling through circulars to find it.
          </p>
          <div className="mt-8">
            <SearchBar variant="hero" />
          </div>
        </div>
      </section>

      {/* Category index */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]">
          Browse by index
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/learn/${c.slug}`}
              className="paper-card group flex flex-col justify-between rounded-sm p-5 transition-transform hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">{c.description}</p>
              </div>
              <span className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--stamp)]">
                Open index
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recently updated */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]">
          Recently updated entries
        </h2>
        <ul className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
          {recent.map((a) => (
            <li key={`${a.category}-${a.slug}`}>
              <Link
                href={`/learn/${a.category}/${a.slug}`}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <span className="flex flex-wrap items-center gap-2">
                  {a.section && <span className="stamp-badge">{a.section}</span>}
                  <span className="font-display font-semibold">{a.title}</span>
                </span>
                <span className="shrink-0 font-mono text-xs text-[var(--ink-soft)]">
                  {new Date(a.lastUpdated).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
