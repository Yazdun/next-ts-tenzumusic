import { Container, Comment, Layout, SEO } from '@/components'
import { IComment } from '@/interfaces/IComment'

import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import { ParsedUrlQuery } from 'querystring'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map((post: { id: number }) => ({
    params: { id: post.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params as IParams

  const [postRes, commentsRes] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`),
  ])

  const [post, comments] = await Promise.all([
    postRes.json(),
    commentsRes.json(),
  ])

  return {
    props: {
      post,
      comments,
    },
  }
}

export default function Page({
  post,
  comments,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO title={post.title} description={post.body} />
      <Container className="grid gap-5">
        <h1 className="text-2xl font-bold capitalize" data-testid="post-title">
          {post.title}
        </h1>
        <p data-testid="post-body" className="whitespace-pre-wrap">
          {post.body}
        </p>
        <ul data-testid="post-comments" className="grid gap-1">
          {comments.map((comment: IComment) => {
            return <Comment comment={comment} key={comment.id} />
          })}
        </ul>
      </Container>
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
