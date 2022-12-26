import axios from 'axios'
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
  console.log(movies)
  return (
    <div className={styles.container}>
      <Seo title="Home" />
      <div className={styles.carousel}>
        <Carousel results={results} />
      </div>
      <h2>Search Results</h2>
      <div className={styles.searchResults}>
        {movies.length > 0 ? <Items results={movies} /> : <div>no results</div>}
      </div>
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
