import { render, screen } from '@testing-library/react'
import { Layout } from '@/components'

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    pathname: '/mock-pathname',
  }),
}))

describe('Layout', () => {
  it('renders the navigation component', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>,
    )

    // render the navigation component
    const navigationElement = screen.getByTestId('navigation')
    expect(navigationElement).toBeInTheDocument()
  })

  it('renders the children content', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>,
    )

    // render the children content
    const contentElement = screen.getByText('Test Content')
    expect(contentElement).toBeInTheDocument()
  })
})
