import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from '@/components'

describe('ThemeToggle', () => {
  it('renders the toggle button', () => {
    render(<ThemeToggle />)

    // Verify that the toggle button is rendered
    const toggleButton = screen.getByTestId('theme-toggle')
    expect(toggleButton).toBeInTheDocument()
  })

  it('toggles the theme when the button is clicked', () => {
    render(<ThemeToggle />)

    // Click the toggle button
    fireEvent.click(screen.getByTestId('theme-toggle'))

    // Verify the updated theme state
    const updatedTheme = screen.getByTestId('theme-toggle-aria').textContent
    expect(updatedTheme).toBe('activate dark mode')
  })
})
