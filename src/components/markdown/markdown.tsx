import ReactMarkDown from "react-markdown"
import remarkGfm from "remark-gfm"

type MarkdownProps = {
  content: string
}

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkDown
      rehypePlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 text-heading-md md:text-heading-xl">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-4 mt-8 text-heading-sm md:text-heading-lg">{children}</h2>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            className="text-blue-200 hover:underline"
          >
            {children}
          </a>
        ),
        p: ({ children }) => (
          <p className="mb-6 leading-relaxed text-gray-200 font-normal">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="font-extrabold text-gray-100">{children}</strong>
        )
      }}
    >
      {content}
    </ReactMarkDown>
  );
};