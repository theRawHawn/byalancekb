import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose-ledger">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
