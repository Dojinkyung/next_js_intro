import styles from '../styles/searchInput.module.css'
import React, { useMemo, useState } from 'react'
import debounce from 'debounce'
import { useRecoilState } from 'recoil'
import { searchState } from '../recoil/states'
import { useRouter } from 'next/router'
import ArrowDown from '../public/arrow-down-svgrepo-com.svg'
import store from 'store'

export default function SearchInput() {
  const [searchBar, setSearchBar] = useState(false)
  const [, setSearch] = useRecoilState(searchState)
  const router = useRouter()
  const handleSearchbar = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setSearchBar((prev) => !prev)
  }
  const handleChange = useMemo(() => {
    const debounceSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setSearch(event.target.value.trim())
      if (!store.get('fav')) {
        store.set('fav', [])
      }
    }
    return debounce(debounceSearch, 800)
  }, [setSearch])

  return (
    <div className={router.pathname === '/' ? `${styles.searchForm}` : `${styles.none}`}>
      <form className={!searchBar ? `${styles.none}` : `${styles.form}`}>
        <input className={styles.input} type="text" placeholder="Search Movie." onChange={handleChange} />
      </form>
      <button className={searchBar ? `${styles.rotate}` : `${styles.searchbardownBTN}`} onClick={handleSearchbar}>
        <ArrowDown />
      </button>
    </div>
  )
}
