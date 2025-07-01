import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { BlogList } from "@/templates/blog";

export const metadata: Metadata = {
  title: 'Site.Set Blog',
  description: 'Dicas e estratégias para impulsionar seu negócio',
  robots: 'index, follow',
  openGraph: {
    title: 'Site.Set Blog',
    description: 'Dicas e estratégias para impulsionar seu negócio',
    url: 'https://nextjs-fundamentos.vercel.app/og-image.jpg',
    siteName: 'Site.Set Blog',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: 'https://nextjs-fundamentos.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.Set Blog',
      },
    ],
  },
};
export default function BlogListPage() {
  const sortedPost = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  
  return (
    <BlogList posts={sortedPost} />
  )
}