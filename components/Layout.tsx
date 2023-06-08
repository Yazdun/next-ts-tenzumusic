export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>navigation bar</nav>
      {props.children}
    </div>
  )
}
