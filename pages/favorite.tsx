import Seo from '../components/Seo'
import store from 'store'
import styles from '../styles/favorite.module.css'
import { Items } from '../components/Items'
import { IResult } from '../types/result'
import { useEffect, useState } from 'react'
import { pageState } from '../recoil/states'
import { useRecoilState } from 'recoil'
export default function Favorite() {
  const [, setPageNumber] = useRecoilState(pageState)
  const [favMovies, setFavMovies] = useState<IResult[]>([])
  useEffect(() => {
    setFavMovies(store.get('fav'))
    setPageNumber(1)
  }, [setPageNumber])
  return (
    <div>
      <Seo title="favorite" />
      <h1 className={styles.big}>Favorite Movies({favMovies?.length || 0})</h1>
      <ul className={styles.favMovies}>
        {favMovies?.length > 0 ? (
          favMovies.map((movie: IResult) => {
            return (
              <li key={movie.id}>
                <Items movie={movie} />
              </li>
            )
          })
        ) : (
          <li className={styles.noResults}>No Results</li>
        )}
      </ul>
    </div>
  )
}
