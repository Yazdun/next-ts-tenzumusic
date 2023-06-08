import { Container, Navigation } from '@/components'

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <Container as="main" className="py-5">
        {props.children}
      </Container>
    </>
  )
}
