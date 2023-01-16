import Seo from '../../components/Seo'
import { IResult } from '../../types/result'
import styles from '../../styles/params.module.css'
import { FavBtn } from '../../components/FavBtn'
import useMovieDetail from '../../service/useMovieDetail'
import { QueryClient } from 'react-query'
import getMovieDetail from '../../service/getMovieDetail'
import { useRecoilState } from 'recoil'
import { pageState } from '../../recoil/states'
import { useEffect } from 'react'

interface Props {
  results: IResult
}
export default function Detail({ results }: Props) {
  const [, setPageNumber] = useRecoilState(pageState)
  useEffect(() => {
    setPageNumber(1)
  }, [setPageNumber])

  const data = useMovieDetail(results)
  if (results) {
    return (
      <div>
        <Seo title={results.title} />
        <div className={styles.titleAndFav}>
          <h4 className={styles.title}>{results.title}</h4>
          <FavBtn movie={data} />
        </div>
        <section className={styles.mainInfo}>
          <a href={`${results.homepage}`}>
            {results.poster_path !== null ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} alt={results.title} />
            ) : (
              <div className={styles.noImg}>{results.title}</div>
            )}
          </a>
          <div>
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
            </dl>
            <p className={styles.genresTitle}>Genres</p>
            <ul className={styles.genres}>
              {results.genres ? results.genres.map((info) => <li key={info.id}>#{info.name}</li>) : null}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
interface Params {
  params: { params: [title: string, id: number] }
}
export async function getServerSideProps({ params: { params } }: Params) {
  const id = params[1]
  const queryClient = new QueryClient()
  const results: IResult = await queryClient.fetchQuery(['getMovieDetail', id], () =>
    getMovieDetail(id).then((res) => res.data),
  )
  return {
    props: {
      results,
    },
  }
}
