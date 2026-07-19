"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/headings";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-24">
      <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
        On this page
      </p>
      <ul className="space-y-1 border-l border-[var(--rule)]">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.depth === 3 ? "1.5rem" : "0.75rem" }}>
            <a
              href={`#${h.id}`}
              className={
                "block border-l-2 -ml-px py-1 text-sm transition-colors " +
                (activeId === h.id
                  ? "border-[var(--stamp)] text-[var(--stamp)] font-medium"
                  : "border-transparent text-[var(--ink-soft)] hover:text-[var(--ink)]")
              }
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
