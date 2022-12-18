import Link from 'next/link'
import { useRouter } from 'next/router'
import { IResult } from '../types/result'
import styles from '../styles/items.module.css'

interface Props {
  results: Array<IResult>
}
export const Items = ({ results }: Props) => {
  const router = useRouter()
  const onClick = ({ id, title }: { id: number; title: string }) => {
    router.push(`/movies/${title}/${id}`)
  }
  return (
    <>
      {results?.map((movie: IResult) => (
        <div
          key={movie.id}
          onClick={() => onClick({ id: movie.id, title: movie.original_title })}
          className={styles.movie}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
    </>
  )
}
