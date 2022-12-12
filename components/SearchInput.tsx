import styles from '../styles/searchInput.module.css'
import React, { useMemo, useState } from 'react'
import debounce from 'debounce'

export default function SearchInput() {
  const [searchBar, setSearchBar] = useState(false)
  const handleSearchbar = () => {
    setSearchBar((prev) => !prev)
  }
  const debouncedResults = useMemo(() => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target.value.trim()
    }
    return debounce(handleChange, 800)
  }, [])
  return (
    <div className={styles.searchForm}>
      <form className={!searchBar ? `${styles.none}` : `${styles.form}`}>
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
        onClick={handleSearchbar}
      >
        <img src="../arrow-down-svgrepo-com.svg" />
      </button>
    </div>
  )
}