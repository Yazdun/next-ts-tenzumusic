import { render, screen } from '@testing-library/react'
import Home from '@/pages'
import mockPosts from '@/__mocks__/posts.json'

describe('Home', () => {
  it('renders the home page with blog posts', () => {
    // rendering the Home component
    render(<Home posts={mockPosts} />)

    const sortedPosts = mockPosts.sort((a, b) => b.id - a.id)

    // rendering the headings
    const headingElement = screen.getByTestId('home-heading')
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveTextContent('Tenzumusic blog')

    // rendering blog posts
    const postElements = screen.getAllByRole('listitem')
    expect(postElements).toHaveLength(sortedPosts.length)
    expect(postElements[0]).toHaveTextContent(sortedPosts[0].title)
    expect(postElements[1]).toHaveTextContent(sortedPosts[1].title)
  })
})
