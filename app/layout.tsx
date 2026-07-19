import type { Metadata } from "next";
import Link from "next/link";
import { BookMarked } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Ledger — A Knowledge Base for Accountants & CAs",
    template: "%s — The Ledger",
  },
  description:
    "A fast, searchable reference for GST, income tax, TDS, and corporate law — built for accountants and chartered accountants working under deadline pressure.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <header className="sticky top-0 z-40 border-b border-[var(--rule)] bg-[var(--paper)]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 sm:px-6">
            <Link href="/" className="flex shrink-0 items-center gap-2">
              <BookMarked size={20} className="text-[var(--stamp)]" />
              <span className="font-display text-lg font-bold tracking-tight">
                The Ledger
              </span>
            </Link>
            <div className="hidden flex-1 sm:block">
              <SearchBar variant="nav" />
            </div>
            <nav className="ml-auto hidden items-center gap-5 text-sm md:flex">
              <Link href="/learn/gst" className="hover:text-[var(--stamp)]">
                GST
              </Link>
              <Link href="/learn/income-tax" className="hover:text-[var(--stamp)]">
                Income Tax
              </Link>
              <Link href="/learn/corporate-law" className="hover:text-[var(--stamp)]">
                Corporate Law
              </Link>
              <Link href="/learn/compliance-calendar" className="hover:text-[var(--stamp)]">
                Calendar
              </Link>
            </nav>
          </div>
          <div className="block px-4 pb-3 sm:hidden">
            <SearchBar variant="nav" />
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t border-[var(--rule)] bg-[var(--paper-raised)]">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[var(--ink-soft)] sm:px-6">
            <p>The Ledger — reference material for practising accountants. Not a substitute for professional advice.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
