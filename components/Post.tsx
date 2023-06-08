import { IPost } from '@/interfaces/IPost'
import Link from 'next/link'
import { HiOutlineLink } from 'react-icons/hi'

export const Post = (props: { post: IPost }) => {
  const { post } = props
  return (
    <li className="max-w-full overflow-hidden">
      <Link
        href={`posts/${post.id}`}
        className="relative flex p-5 border-2 rounded-md dark:border-gray-700 dark:bg-black"
      >
        <p className="truncate">{post.title}</p>
        <div className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-5 pl-20 bg-gradient-to-l from-white to-transparent dark:from-black via-white dark:via-black">
          <HiOutlineLink className="text-lg" />
        </div>
      </Link>
    </li>
  )
}
