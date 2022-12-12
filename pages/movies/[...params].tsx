import Seo from '../../components/Seo'
import { IResult } from '../../types/result'
import axios from 'axios'
interface Props {
  results: IResult
}
export default function Detail({ results }: Props) {
  if (results) {
    return (
      <div>
        <Seo title={results.title} />
        <h4>{results.title}</h4>
        <img src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} />
        <p>{results.original_language}</p>
        <p>{results.overview}</p>
        <p>{results.release_date}</p>
        <p>{results.vote_average}</p>
        <p>{results.vote_count}</p>
      </div>
    )
  }
}

export async function getServerSideProps({ params: { params } }: any) {
  const results = await (
    await axios.get(`http://localhost:3000/api/movies/${params[1]}`)
  ).data
  return {
    props: {
      results,
    },
  }
}
