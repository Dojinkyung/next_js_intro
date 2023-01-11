import Seo from '../components/Seo'
import store from 'store'
import styles from '../styles/favorite.module.css'
import { Items } from '../components/Items'
import { IResult } from '../types/result'
export default function Favorite() {
  const movies = store.get('fav') || []
  return (
    <div>
      <Seo title="favorite" />
      <h1 className={styles.big}>Favorite Movies({movies?.length})</h1>
      <ul className={styles.favMovies}>
        {movies.length > 0 ? (
          movies.map((movie: IResult) => {
            return (
              <li key={movie.id}>
                <Items movie={movie} />
              </li>
            )
          })
        ) : (
          <div className={styles.noResults}>No Results</div>
        )}
      </ul>
    </div>
  )
}
