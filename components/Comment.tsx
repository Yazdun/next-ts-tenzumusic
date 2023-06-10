import { IComment } from '@/interfaces/IComment'
import { FaUserCircle } from 'react-icons/fa'

export const Comment = (props: { comment: IComment }) => {
  const { comment } = props

  return (
    <li className="p-5 bg-gray-100 border-l-2 dark:border-gray-700 rounded-r-xl dark:bg-black">
      <div className="flex items-center gap-1 lowercase">
        <FaUserCircle data-testid="user-circle-icon" />
        <span data-testid="comment-email">{comment.email}</span>
      </div>
      <p
        data-testid="comment-body"
        className="text-slate-500 dark:text-gray-500"
      >
        {comment.body}
      </p>
    </li>
  )
}
