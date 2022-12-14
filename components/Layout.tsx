import NavBar from './NavBar'
import styles from '../styles/layout.module.css'

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <NavBar />
      <section className={styles.main}>{children}</section>
    </div>
  )
}
