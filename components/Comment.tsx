import { IComment } from '@/interfaces/IComment'
import { FaUserCircle } from 'react-icons/fa'

export const Comment = (props: { comment: IComment }) => {
  const { comment } = props

  return (
    <li className="p-5 border-l-2 dark:border-gray-700 bg-slate-100 rounded-r-xl dark:bg-black">
      <div className="flex items-center gap-1 lowercase">
        <FaUserCircle />
        {comment.email}
      </div>
      <p className="text-slate-500 dark:text-gray-500">{comment.body}</p>
    </li>
  )
}
