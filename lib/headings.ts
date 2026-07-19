import GithubSlugger from "github-slugger";

export type Heading = {
  id: string;
  text: string;
  depth: 2 | 3;
};

export function extractHeadings(markdown: string): Heading[] {
  // Fresh slugger per document — rehype-slug (used to render the article body)
  // also starts a fresh slugger per render, so IDs line up between the two.
  const slugger = new GithubSlugger();
  const lines = markdown.split("\n");
  const headings: Heading[] = [];
  for (const line of lines) {
    const h2 = /^##\s+(.*)/.exec(line);
    const h3 = /^###\s+(.*)/.exec(line);
    if (h2) {
      const text = h2[1].trim();
      headings.push({ id: slugger.slug(text), text, depth: 2 });
    } else if (h3) {
      const text = h3[1].trim();
      headings.push({ id: slugger.slug(text), text, depth: 3 });
    }
  }
  return headings;
}
