"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { articles, type Article } from "@/lib/kb";

function matchScore(article: Article, q: string): number {
  const query = q.toLowerCase();
  let score = 0;
  if (article.title.toLowerCase().includes(query)) score += 3;
  if (article.section?.toLowerCase().includes(query)) score += 3;
  if (article.tags.some((t) => t.toLowerCase().includes(query))) score += 2;
  if (article.description.toLowerCase().includes(query)) score += 1;
  return score;
}

export default function SearchBar({ variant = "nav" }: { variant?: "nav" | "hero" }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return articles
      .map((a) => ({ article: a, score: matchScore(a, query) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.article);
  }, [query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function goTo(article: Article) {
    router.push(`/learn/${article.category}/${article.slug}`);
    setOpen(false);
    setQuery("");
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      goTo(results[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const isHero = variant === "hero";

  return (
    <div ref={containerRef} className={isHero ? "relative w-full max-w-xl" : "relative w-full max-w-sm"}>
      <div
        className={
          "flex items-center gap-2 border bg-[var(--paper-raised)] " +
          (isHero
            ? "rounded-md border-[var(--rule)] px-4 py-3 shadow-sm"
            : "rounded-sm border-[var(--rule)] px-3 py-1.5")
        }
      >
        <Search size={isHero ? 18 : 15} className="shrink-0 text-[var(--ink-soft)]" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActiveIndex(0);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          type="text"
          placeholder={isHero ? "Search “Section 194J”, “Input Tax Credit”, “Rule 88A”…" : "Search the knowledge base…"}
          className={
            "w-full bg-transparent outline-none placeholder:text-[var(--ink-soft)]/60 " +
            (isHero ? "text-base" : "text-sm")
          }
          aria-label="Search the knowledge base"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            aria-label="Clear search"
            className="text-[var(--ink-soft)] hover:text-[var(--ink)]"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {open && query.trim() && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-96 overflow-y-auto rounded-sm border border-[var(--rule)] bg-[var(--paper-raised)] shadow-lg">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-[var(--ink-soft)]">
              No entries match “{query}”. Try a section number or a shorter term.
            </p>
          ) : (
            <ul>
              {results.map((a, i) => (
                <li key={`${a.category}-${a.slug}`}>
                  <button
                    onClick={() => goTo(a)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={
                      "flex w-full flex-col items-start gap-1 px-4 py-2.5 text-left border-b border-[var(--rule)] last:border-b-0 " +
                      (i === activeIndex ? "bg-[var(--paper)]" : "")
                    }
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-display text-sm font-semibold text-[var(--ink)]">
                        {a.title}
                      </span>
                      {a.section && <span className="stamp-badge">{a.section}</span>}
                    </span>
                    <span className="text-xs text-[var(--ink-soft)] line-clamp-1">{a.description}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
