import { render, screen } from '@testing-library/react'
import Page from '@/pages/post/[id]'
import mockPosts from '@/__mocks__/posts.json'
import mockComments from '@/__mocks__/comments.json'

describe('Page', () => {
  it('renders the page with post title, body, and comments', () => {
    const mockPost = mockPosts[0]

    render(<Page post={mockPost} comments={mockComments} />)

    // rendering the post title
    const titleElement = screen.getByTestId('post-title')
    expect(titleElement).toHaveTextContent(mockPost.title)

    // rendering the post body
    const bodyElement = screen.getByTestId('post-body')
    expect(bodyElement).toBeInTheDocument()

    // rendering the comments
    const commentsListElement = screen.getByTestId('post-comments')
    const commentElements = commentsListElement.querySelectorAll('li')
    expect(commentElements).toHaveLength(mockComments.length)
  })
})
