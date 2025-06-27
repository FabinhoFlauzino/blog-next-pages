import { PostPage as Post, PostPageProps } from "@/templates/blog"
import { allPosts } from "contentlayer/generated"
import { GetStaticProps } from "next"

export default function PostPage({ post }: PostPageProps) {
  return <Post post={post} />
}

export const getStaticPaths = (async () => {
  const sortedPost = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const recentePost = sortedPost.slice(0, 5)
  const paths = recentePost.map((post) => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
})

export const getStaticProps = (async (context) => {
  const { slug } = context.params as { slug: string }
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    return { notFound: true }
  }

  return {
    props: {
      post
    }
  }
}) as GetStaticProps  