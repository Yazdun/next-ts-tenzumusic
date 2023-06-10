import Link from 'next/link'
import { Container, ThemeToggle } from '@/components'

export const Navigation: React.FC = () => {
  return (
    <div
      data-testid="navigation"
      className="sticky top-0 z-50 bg-white border-b-2 dark:border-gray-700 dark:bg-[rgba(0,0,0,0.7)] backdrop-blur-md"
    >
      <Container as="nav" className="flex items-center justify-between py-4">
        <Link href="/" className="font-semibold">
          Tenzumusic
        </Link>
        <ThemeToggle />
      </Container>
    </div>
  )
}
