import Link from 'next/link'
import { Container } from '@/components'

export const Navigation = () => {
  return (
    <div className="border-b-2">
      <Container as="nav" className="py-5">
        <Link href="/">Tenzumusic</Link>
      </Container>
    </div>
  )
}
