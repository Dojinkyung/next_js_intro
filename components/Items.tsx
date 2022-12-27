import Link from 'next/link'
import { useRouter } from 'next/router'
import { IResult } from '../types/result'
import styles from '../styles/items.module.css'

interface Props {
  movie: IResult
}
export const Items = ({ movie }: Props) => {
  const router = useRouter()
  const onClick = ({ id, title }: { id: number; title: string }) => {
    router.push(`/movies/${title}/${id}`)
  }
  return (
    <div key={movie.id} onClick={() => onClick({ id: movie.id, title: movie.original_title })} className={styles.movie}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
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
