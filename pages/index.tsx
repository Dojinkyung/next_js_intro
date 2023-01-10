import { useCallback, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { Carousel } from '../components/Carousel'
import { Items } from '../components/Items'
import Seo from '../components/Seo'
import { pageState, searchState } from '../recoil/states'
import useSearchMovie from '../service/useSearchMovie'
import styles from '../styles/index.module.css'
import { IResult, IRootObject } from '../types/result'
import { QueryClient } from 'react-query'
import getCarousel from '../service/getCarousel'

interface Props {
  results: IResult[]
}
export default function Home({ results }: Props) {
  const [pageNumber, setPageNumber] = useRecoilState(pageState)
  const [search] = useRecoilState(searchState)
  const observer = useRef<IntersectionObserver | null>(null)
  const { movies, hasMore, totalResult } = useSearchMovie(search, pageNumber)
  const lastMovieElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && movies.length < totalResult) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [hasMore, movies.length, setPageNumber, totalResult],
  )
  return (
    <div className={styles.container}>
      <Seo title="Home" />
      <div className={styles.carousel}>
        <Carousel results={results} />
      </div>

      <h2 className={styles.search}>Search Results ({totalResult})</h2>
      <ul className={styles.searchResults}>
        {movies.length > 0 ? (
          movies.map((movie, index) => {
            if (movies.length === index + 1) {
              return (
                <li key={movie.id} ref={lastMovieElementRef}>
                  <Items movie={movie} />
                </li>
              )
            }
            return (
              <li key={movie.id}>
                <Items movie={movie} />
              </li>
            )
          })
        ) : (
          <div className={styles.noResults}>No Results</div>
        )}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()
  const { results }: IRootObject = await queryClient.fetchQuery(['getCarousel'], () =>
    getCarousel().then((res) => res.data),
  )
  return {
    props: {
      results,
    },
  }
}
