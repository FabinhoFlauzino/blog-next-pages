import { BlogList, type BlogListProps } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps } from "next";

export default function BlogPage({posts}: BlogListProps) {
  console.log(posts)
  return (
    <BlogList posts={posts}/>
  )
}

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) {
      return -1;
    }
    return 1;
  });

  return {
    props: {
      posts: sortedPosts
    },
  }
}) satisfies GetStaticProps<BlogListProps>