import axios from 'axios'
import { Items } from '../components/Items'
import Seo from '../components/Seo'
import styles from '../styles/index.module.css'
import { IResult } from '../types/result'

interface Props {
  results: Array<IResult>
}
export default function Home({ results }: Props) {
  return (
    <div className={styles.container}>
      <Seo title="Home" />
      <Items results={results}></Items>
    </div>
  )
}

export async function getServerSideProps() {
  const { results } = await (
    await axios.get(`http://localhost:3000/api/movies`)
  ).data
  return {
    props: {
      results,
    },
  }
}
