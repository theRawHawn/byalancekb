# The Ledger — Knowledge Base for Accountants & CAs

A fast, searchable reference site for GST, income tax, TDS, and corporate law, built as a static Next.js site for Cloudflare Pages.

## Stack

- **Next.js 16 (App Router)** — statically exported (`output: "export"`), so every page pre-renders to plain HTML at build time. No server, no cold starts, no database.
- **Tailwind CSS v4** — design tokens (colors, fonts) live in `app/globals.css` under `@theme inline`.
- **react-markdown + remark-gfm + rehype-slug** — renders article content from markdown strings, with heading IDs that power the table of contents.
- **lucide-react** — icons.

## Content model

There is no CMS or database. All content lives in one file: **`lib/kb.ts`**.

- `categories` — the four top-level indexes (GST, Income Tax, Corporate Law, Compliance Calendar).
- `articles` — each entry has `category`, `slug`, `title`, `description`, an optional `section` (shown as the brass "stamp" badge — e.g. `"Section 194J"`), `tags`, a markdown `content` string, and `lastUpdated`.

**To add an article:** add an object to the `articles` array in `lib/kb.ts`. The page at `/learn/[category]/[slug]` is generated automatically via `generateStaticParams` — no routing code to touch. Use `##` and `###` headings in `content`; they automatically populate the sticky table of contents.

**To add a category:** add an object to `categories`, then add matching articles.

## Structure

```
app/
  layout.tsx              # sticky nav, global search, footer
  page.tsx                # homepage — hero, category grid, recent entries
  sitemap.ts / robots.ts  # SEO
  learn/[category]/page.tsx        # category listing
  learn/[category]/[slug]/page.tsx # article page (TOC + JSON-LD schema)
components/
  SearchBar.tsx            # client-side search, filters lib/kb.ts in memory
  Sidebar.tsx               # category index nav
  TableOfContents.tsx        # sticky, scroll-spy TOC
  MarkdownRenderer.tsx        # renders article markdown
lib/
  kb.ts        # all content lives here
  headings.ts  # extracts h2/h3 from markdown for the TOC
public/
  llms.txt     # AEO/GEO discoverability file
```

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export written to /out
npm run lint
```

## Deploying to Cloudflare Pages

Because the site is fully static (`output: "export"`), no adapter is required:

1. **Build command:** `npm run build`
2. **Build output directory:** `out`
3. Connect the GitHub repo in the Cloudflare Pages dashboard, or deploy directly:
   ```bash
   npx wrangler pages deploy out --project-name=the-ledger
   ```

Before going live, update `BASE_URL` in `app/sitemap.ts` and the sitemap reference in `app/robots.ts` to the real production domain.

## Next steps (suggested)

- Swap the hardcoded palette/typefaces if the brand direction changes — everything is driven from CSS variables in `app/globals.css`.
- If content outgrows a single file, split `lib/kb.ts` into per-category files or move to MDX files under `content/` — the page components only depend on the exported functions (`getAllArticles`, `getArticleBySlug`, etc.), so the swap is contained to `lib/kb.ts`.
- Wire `SearchBar` up to a real search index (Pagefind or Algolia DocSearch) once the article count grows past what in-memory filtering handles comfortably.
