import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/navBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <img src="../video-movie-svgrepo-com.svg" />
      </Link>
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? `${styles.active}` : ``}>
            Home
          </a>
        </Link>
        <Link href="/Favorite">
          <a
            className={
              router.pathname === "/Favorite" ? `${styles.active}` : ""
            }>
            Favorite
          </a>
        </Link>
      </div>
    </nav>
  );
}
