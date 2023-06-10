import { Container, Layout, Post, SEO } from '@/components'
import { IPost } from '@/interfaces/IPost'

import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<{
  posts: IPost[]
}> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return { props: { posts } }
}

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO title="Tenzumusic" description="Tenzumusic blog" />
      <Container>
        <h1 className="sr-only" data-testid="home-heading">
          Tenzumusic blog
        </h1>
        <h2 className="mb-5">Latest blog posts:</h2>
        <ul className="grid gap-2">
          {posts
            .sort((a, b) => b.id - a.id)
            .map(post => {
              return <Post key={post.id} post={post} />
            })}
        </ul>
      </Container>
    </>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
