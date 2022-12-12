import NavBar from './NavBar'

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <NavBar />
      <section>{children}</section>
    </>
  )
}
