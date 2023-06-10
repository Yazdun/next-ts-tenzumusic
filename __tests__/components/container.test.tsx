import { render, screen } from '@testing-library/react'
import { Container } from '@/components'

describe('Container', () => {
  it('renders the container with default div element', () => {
    render(<Container>Test Container</Container>)

    // rendering the container with default div element
    const containerElement = screen.getByText('Test Container')
    expect(containerElement).toBeInTheDocument()
    expect(containerElement.tagName.toLowerCase()).toBe('div')
  })

  it('renders the container with a custom element', () => {
    render(<Container as="section">Test Container</Container>)

    // rendering the container with a custom element
    const containerElement = screen.getByText('Test Container')
    expect(containerElement).toBeInTheDocument()
    expect(containerElement.tagName.toLowerCase()).toBe('section')
  })

  it('applies custom className and other HTML attributes to the container', () => {
    render(
      <Container
        className="custom-class"
        id="container"
        data-testid="container"
      >
        Test Container
      </Container>,
    )

    // rendering the container with a custom element
    const containerElement = screen.getByTestId('container')
    expect(containerElement).toBeInTheDocument()
    expect(containerElement).toHaveClass('custom-class')
    expect(containerElement.getAttribute('id')).toBe('container')
  })
})
