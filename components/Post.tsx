import { IPost } from '@/interfaces/IPost'
import Link from 'next/link'

export const Post = (props: { post: IPost }) => {
  const { post } = props
  return (
    <li>
      <Link
        href={`posts/${post.id}`}
        className="flex p-5 border-2 rounded-md dark:border-gray-700"
      >
        {post.title}
      </Link>
    </li>
  )
}
