import { render, screen } from '@testing-library/react'
import { Post } from '@/components'
import mockPosts from '@/__mocks__/posts.json'

describe('Post', () => {
  const mockPost = mockPosts[0]

  it('renders the post title', () => {
    render(<Post post={mockPost} key={mockPost.id} />)

    // render the post title
    const titleElement = screen.getByTestId('post-preview-title')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.textContent).toBe(mockPost.title)
  })

  it('renders the post link with correct href', () => {
    render(<Post post={mockPost} key={mockPost.id} />)

    // Verify that the post link is rendered with the correct href
    const linkElement = screen.getByTestId('post-preview-link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.getAttribute('href')).toBe(`post/${mockPost.id}`)
  })
})
