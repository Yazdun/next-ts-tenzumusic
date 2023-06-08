import { Navigation } from '@/components'

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  )
}
