import { Layout, Post } from '@/components'
import { IComment } from '@/interfaces/IComment'
import { IPost } from '@/interfaces/IPost'

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
      <h1 className="mb-5 text-2xl">{post.title}</h1>
      <p className="text-slate-500 dark:text-gray-400">{post.body}</p>
      <ul>
        {comments.map((comment: IComment) => {
          return <li key={comment.id}>{comment.body}</li>
        })}
      </ul>
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
