import Link from 'next/link'
import { useRouter } from 'next/router'
import { IResult } from '../types/result'
import styles from '../styles/items.module.css'
import HeartSolidImage from '../public/heart-like-solid-svgrepo-com.svg'

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
          <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <HeartSolidImage className={styles.heart} />
        </div>
      ) : (
        <div className={styles.noImg}>{movie.title}</div>
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
