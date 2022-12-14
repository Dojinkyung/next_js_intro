import Seo from '../../components/Seo'
import { IResult } from '../../types/result'
import axios from 'axios'
import styles from '../../styles/params.module.css'
import HeartSolidImage from '../../public/heart-like-solid-svgrepo-com.svg'

interface Props {
  results: IResult
}
export default function Detail({ results }: Props) {
  if (results) {
    return (
      <div>
        <Seo title={results.title} />
        <div className={styles.titleAndFav}>
          <h4 className={styles.title}>{results.title}</h4>
          <HeartSolidImage className={styles.heart} />
        </div>
        <section className={styles.mainInfo}>
          <a href={`${results.homepage}`}>
            {results.poster_path !== null ? (
              <img src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} />
            ) : (
              <div className={styles.noImg}>{results.title}</div>
            )}
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
              {results.genres ? results.genres.map((info) => <p key={info.id}>{info.name}</p>) : null}
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
