import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/navBar.module.css";
import SearchInput from "./SearchInput";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link href="/">
          <img src="../video-movie-svgrepo-com.svg" />
        </Link>
        <Link href="/">
          <a className={router.pathname === "/" ? `${styles.active}` : ``}>
            Home
          </a>
        </Link>
        <Link href="/favorite">
          <a
            className={
              router.pathname === "/favorite" ? `${styles.active}` : ""
            }>
            Favorite
          </a>
        </Link>
      </div>
      <SearchInput />
    </nav>
  );
}
