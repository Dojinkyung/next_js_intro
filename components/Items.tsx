import { useRouter } from 'next/router'
import { IResult } from '../types/result'
import styles from '../styles/items.module.css'
import { FavBtn } from './FavBtn'

interface Props {
  movie: IResult
}
export const Items = ({ movie }: Props) => {
  const router = useRouter()
  const onClick = ({ id, title }: { id: number; title: string }) => {
    router.push(`/movies/${title}/${id}`)
  }
  return (
    <div key={movie.id} onClick={() => onClick({ id: movie.id, title: movie.original_title })}>
      {movie.poster_path !== null ? (
        <div className={styles.movie}>
          <img
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <FavBtn movie={movie} />
        </div>
      ) : (
        <div className={styles.movie}>
          <div className={styles.noImg}>{movie.title}</div>
          <FavBtn movie={movie} />
        </div>
      )}
    </div>
  )
}
