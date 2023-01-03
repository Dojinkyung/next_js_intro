import Seo from '../../components/Seo'
import { IResult } from '../../types/result'
import axios from 'axios'
import styles from '../../styles/params.module.css'

interface Props {
  results: IResult
}
export default function Detail({ results }: Props) {
  if (results) {
    console.log(results)
    return (
      <div>
        <Seo title={results.title} />
        <h4 className={styles.title}>{results.title}</h4>
        <section className={styles.mainInfo}>
          <a href={`${results.homepage}`}>
            <img src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} />
          </a>
          <dl>
            <dt>Runtime</dt>
            <dd>{results.runtime} minutes</dd>
            <dt>Overview</dt>
            <dd>{results.overview}</dd>
            <dt>Release Date</dt>
            <dd>{results.release_date}</dd>
            <dt>Vote Average / Vote Count</dt>
            <dd>
              {results.vote_average} / {results.vote_count}
            </dd>
            <dt>Genres</dt>
            <dd className={styles.searchResults}>
              {results.genres ? results.genres.map((info) => <li key={info.id}>{info.name}</li>) : null}
            </dd>
          </dl>
        </section>
      </div>
    )
  }
}

export async function getServerSideProps({ params: { params } }: any) {
  const results = await (await axios.get(`http://localhost:3000/api/movies/details/${params[1]}`)).data
  return {
    props: {
      results,
    },
  }
}
