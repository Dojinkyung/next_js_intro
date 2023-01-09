import Link from 'next/link'
import { useRouter } from 'next/router'
import { IResult } from '../types/result'
import styles from '../styles/items.module.css'
import HeartSolidImage from '../public/heart-like-solid-svgrepo-com.svg'
import { useRecoilState } from 'recoil'
import { FavMovie } from '../recoil/states'
import store from 'store'

interface Props {
  movie: IResult
}
export const Items = ({ movie }: Props) => {
  const router = useRouter()
  const [, setFavSelect] = useRecoilState(FavMovie)
  const onClick = ({ id, title }: { id: number; title: string }) => {
    router.push(`/movies/${title}/${id}`)
  }
  const handleEventBtn = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
    if (movie.fav === false) {
      movie.fav = true
      store.set('fav', [...store.get('fav'), movie])
      setFavSelect(store.get('fav'))
    } else {
      movie.fav = false
      store.set(
        'fav',
        [...store.get('fav')].filter((fav: IResult) => fav.id !== movie?.id),
      )
      setFavSelect(store.get('fav'))
    }
  }
  return (
    <div key={movie.id} onClick={() => onClick({ id: movie.id, title: movie.original_title })}>
      {movie.poster_path !== null ? (
        <div className={styles.movie}>
          <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <button onClick={handleEventBtn} className={styles.favBTN}>
            <HeartSolidImage className={movie.fav ? `${styles.fav}` : `${styles.heart}`} />
          </button>
        </div>
      ) : (
        <div className={styles.movie}>
          <div className={styles.noImg}>{movie.title}</div>
          <button onClick={handleEventBtn} className={styles.favBTN}>
            <HeartSolidImage className={movie.fav ? `${styles.fav}` : `${styles.heart}`} />
          </button>
        </div>
      )}
      <div className={styles.hoverName}>
        <h4>
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <a className={styles.title}>{movie.original_title}</a>
          </Link>
        </h4>
      </div>
    </div>
  )
}
