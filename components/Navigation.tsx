import Link from 'next/link'
import { Container, ThemeToggle } from '@/components'

export const Navigation: React.FC = () => {
  return (
    <div className="border-b-2 dark:border-gray-700">
      <Container as="nav" className="flex items-center justify-between py-4">
        <Link href="/" className="font-semibold">
          Tenzumusic
        </Link>
        <ThemeToggle />
      </Container>
    </div>
  )
}
