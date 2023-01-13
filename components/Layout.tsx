import NavBar from './NavBar'
import styles from '../styles/layout.module.css'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { windowState } from '../recoil/states'

export default function Layout({ children }: { children: JSX.Element }) {
  const [windowWidth, setWindowWidth] = useRecoilState(windowState)
  useEffect(() => {
    const resizeWindow = () => {
      setWindowWidth(window.innerWidth)
    }
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', resizeWindow)
    return () => {
      window.removeEventListener('resize', resizeWindow)
    }
  }, [setWindowWidth, windowWidth])
  return (
    <div>
      <NavBar />
      <section className={styles.main}>{children}</section>
    </div>
  )
}
