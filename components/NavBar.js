import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/navBar.module.css";
import { useMemo, useState } from "react";
import debounce from "debounce";

export default function NavBar() {
  const router = useRouter();
  const [searchBar, setSearchBar] = useState(false);
  const handleSearchbar = () => {
    setSearchBar((prev) => !prev);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const debouncedResults = useMemo(() => {
    const handleChange = (event) => {
      event.target.value.trim();
    };
    return debounce(handleChange, 800);
  }, []);
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

      <form
        onSubmit={onSubmit}
        className={!searchBar ? `${styles.none}` : `${styles.form}`}>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Search Movie."
            onChange={debouncedResults}
          />
          <button className={styles.button} type="submit">
            검색
          </button>
        </div>
      </form>
      <button
        className={
          searchBar ? `${styles.rotate}` : `${styles.searchbardownBTN}`
        }
        onClick={handleSearchbar}>
        <img src="../arrow-down-svgrepo-com.svg" />
      </button>
    </nav>
  );
}
