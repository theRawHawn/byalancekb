import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import {
  getAllCategories,
  getCategoryBySlug,
  getArticlesByCategory,
} from "@/lib/kb";


type Params = { category: string };

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const articles = getArticlesByCategory(categorySlug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside>
          <Sidebar activeCategory={categorySlug} />
        </aside>
        <div>
          <p className="stamp-badge mb-3 inline-flex">{articles.length} entries</p>
          <h1 className="font-display text-3xl font-bold tracking-tight">{category.name}</h1>
          <p className="mt-2 max-w-2xl text-[var(--ink-soft)]">{category.description}</p>

          <ul className="mt-8 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/learn/${categorySlug}/${a.slug}`}
                  className="flex flex-col gap-1 py-4"
                >
                  <span className="flex flex-wrap items-center gap-2">
                    {a.section && <span className="stamp-badge">{a.section}</span>}
                    <span className="font-display text-lg font-semibold">{a.title}</span>
                  </span>
                  <span className="text-sm text-[var(--ink-soft)]">{a.description}</span>
                </Link>
              </li>
            ))}
            {articles.length === 0 && (
              <li className="py-6 text-sm text-[var(--ink-soft)]">
                No entries filed under this index yet.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
