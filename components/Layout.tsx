import { Navigation } from '@/components'

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
    </>
  )
}
