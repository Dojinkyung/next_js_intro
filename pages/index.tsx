import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { Carousel } from '../components/Carousel'
import { Items } from '../components/Items'
import Seo from '../components/Seo'
import { movieState } from '../recoil/states'
import styles from '../styles/index.module.css'
import { IResult } from '../types/result'

interface Props {
  results: Array<IResult>
}
export default function Home({ results }: Props) {
  const [movies] = useRecoilState(movieState)
  const router = useRouter()
  const onClick = ({ id, title }: { id: number; title: string }) => {
    router.push(`/movies/${title}/${id}`)
  }
  return (
    <div className={styles.container}>
      <Seo title="Home" />
      <div className={styles.carousel}>
        <Carousel>
          {results?.map((movie: IResult) => (
            <div
              className={styles.results}
              key={movie.id}
              onClick={() => onClick({ id: movie.id, title: movie.original_title })}
            >
              <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <h4 className={styles.text}>
                <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                  <a>{movie.original_title}</a>
                </Link>
              </h4>
            </div>
          ))}
        </Carousel>
      </div>
      <h2>Search Results</h2>
      <div className={styles.searchResults}>{movies ? <Items results={movies} /> : null}</div>
    </div>
  )
}

export async function getServerSideProps() {
  const { results } = await (await axios.get(`http://localhost:3000/api/movies`)).data
  return {
    props: {
      results,
    },
  }
}
