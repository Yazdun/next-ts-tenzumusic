import { render, screen } from '@testing-library/react'
import { Comment } from '@/components'
import mockComments from '@/__mocks__/comments.json'

describe('Comment', () => {
  const mockComment = mockComments[0]

  it('renders the comment with user email and body', () => {
    render(<Comment comment={mockComment} />)

    // render user email
    const emailElement = screen.getByTestId('comment-email')
    expect(emailElement).toBeInTheDocument()
    expect(emailElement).toHaveTextContent(mockComment.email)

    // render comment body
    const bodyElement = screen.getByTestId('comment-body')
    expect(bodyElement).toBeInTheDocument()
  })

  it('renders the default user circle icon', () => {
    render(<Comment comment={mockComment} />)

    // render user icon
    const userCircleIcon = screen.getByTestId('user-circle-icon')
    expect(userCircleIcon).toBeInTheDocument()
  })
})
