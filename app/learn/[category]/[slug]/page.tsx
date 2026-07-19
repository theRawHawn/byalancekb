import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import TableOfContents from "@/components/TableOfContents";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getAllArticles, getArticleBySlug, getCategoryBySlug } from "@/lib/kb";
import { extractHeadings } from "@/lib/headings";


type Params = { category: string; slug: string };

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticleBySlug(category, slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: categorySlug, slug } = await params;
  const article = getArticleBySlug(categorySlug, slug);
  if (!article) notFound();

  const category = getCategoryBySlug(categorySlug);
  const headings = extractHeadings(article.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.description,
    dateModified: article.lastUpdated,
    keywords: article.tags.join(", "),
    about: article.section,
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-[var(--ink-soft)]">
        <Link href="/" className="hover:text-[var(--ink)]">Home</Link>
        <ChevronRight size={13} />
        <Link href={`/learn/${categorySlug}`} className="hover:text-[var(--ink)]">
          {category?.name ?? categorySlug}
        </Link>
        <ChevronRight size={13} />
        <span className="text-[var(--ink)]">{article.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[200px_1fr_220px]">
        <aside className="hidden lg:block">
          <Sidebar activeCategory={categorySlug} />
        </aside>

        <article>
          <header className="mb-6 border-b border-[var(--rule)] pb-6">
            {article.section && <span className="stamp-badge mb-3 inline-flex">{article.section}</span>}
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-3 max-w-2xl text-[var(--ink-soft)]">{article.description}</p>
            <p className="mt-4 font-mono text-xs text-[var(--ink-soft)]">
              Last updated{" "}
              {new Date(article.lastUpdated).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </header>

          <MarkdownRenderer content={article.content} />

          <div className="mt-8 flex flex-wrap gap-2 border-t border-[var(--rule)] pt-6">
            {article.tags.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-[var(--rule)] bg-[var(--paper-raised)] px-2.5 py-1 font-mono text-xs text-[var(--ink-soft)]"
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        <aside className="hidden lg:block">
          <TableOfContents headings={headings} />
        </aside>
      </div>
    </div>
  );
}
