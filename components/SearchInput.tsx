import styles from '../styles/searchInput.module.css'
import React, { useMemo, useState } from 'react'
import debounce from 'debounce'
import { useRecoilState } from 'recoil'
import { pageState, searchState } from '../recoil/states'

export default function SearchInput() {
  const [searchBar, setSearchBar] = useState(false)
  const [, setSearch] = useRecoilState(searchState)
  const [, setPageNumber] = useRecoilState(pageState)
  const handleSearchbar = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setSearchBar((prev) => !prev)
  }
  const handleSubmitBtn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  const handleChange = useMemo(() => {
    const debounceSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setSearch(event.target.value.trim())
      setPageNumber(1)
    }
    return debounce(debounceSearch, 800)
  }, [setPageNumber, setSearch])

  return (
    <div className={styles.searchForm}>
      <form className={!searchBar ? `${styles.none}` : `${styles.form}`} onSubmit={handleSubmitBtn}>
        <div>
          <input className={styles.input} type="text" placeholder="Search Movie." onChange={handleChange} />
          <button className={styles.button} type="submit">
            검색
          </button>
        </div>
      </form>
      <button className={searchBar ? `${styles.rotate}` : `${styles.searchbardownBTN}`} onClick={handleSearchbar}>
        <img src="../arrow-down-svgrepo-com.svg" />
      </button>
    </div>
  )
}
