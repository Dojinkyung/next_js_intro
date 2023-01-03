import getData from './getData'
import { useEffect, useState } from 'react'
import { IResult, IRootObject } from '../types/result'
import { useQuery } from 'react-query'

const useSearchMovie = (search: string, page: number) => {
  const [movies, setMovies] = useState<IResult[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [totalResult, setTotalResult] = useState<number>(0)

  const { data } = useQuery<IRootObject>(
    ['getData', search, page],
    () => getData(search, page).then((res) => res.data),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  )
  console.log(movies)
  useEffect(() => {
    setMovies([])
    setTotalResult(0)
  }, [search])
  useEffect(() => {
    if (data !== undefined && search.length > 0) {
      setMovies((prevMovies: Array<IResult>) => {
        return prevMovies.concat(data.results)
      })
      setHasMore(data.results.length > 0)
      setTotalResult(data.total_results)
    }
  }, [data, search.length])

  return { movies, hasMore, totalResult }
}

export default useSearchMovie
