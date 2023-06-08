import { Comment, Layout } from '@/components'
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
    <div className="grid gap-5">
      <h1 className="text-2xl font-bold capitalize">{post.title}</h1>
      <p className="text-slate-500 dark:text-gray-400">{post.body}</p>
      <ul className="grid gap-1">
        {comments.map((comment: IComment) => {
          return <Comment comment={comment} key={comment.id} />
        })}
      </ul>
    </div>
  )
}

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
