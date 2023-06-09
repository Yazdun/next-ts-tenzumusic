import { IPost } from '@/interfaces/IPost'
import Link from 'next/link'
import { HiOutlineLink } from 'react-icons/hi'
import { motion } from 'framer-motion'

export const framer_opacity = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
}

export const Post = (props: { post: IPost }) => {
  const { post } = props
  return (
    <motion.li {...framer_opacity} className="max-w-full overflow-hidden">
      <Link
        data-testid="post-preview-link"
        href={`post/${post.id}`}
        className="relative flex p-5 border-2 rounded-md dark:border-gray-700 dark:bg-black"
      >
        <h3 className="truncate" data-testid="post-preview-title">
          {post.title}
        </h3>
        <div className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-5 pl-20 bg-gradient-to-l from-white to-transparent dark:from-black via-white dark:via-black">
          <HiOutlineLink className="text-lg" />
        </div>
      </Link>
    </motion.li>
  )
}
