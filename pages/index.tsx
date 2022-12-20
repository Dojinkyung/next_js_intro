import axios from 'axios'
import { useRecoilState } from 'recoil'
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
  return (
    <div className={styles.container}>
      <Seo title="Home" />
      <Items results={results}></Items>

      {movies ? <Items results={movies} /> : null}
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
