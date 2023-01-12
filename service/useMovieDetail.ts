import { IResult } from '../types/result'
import store from 'store'
import { useEffect, useState } from 'react'
const useMovieDetail = (results: IResult) => {
  const [movies, setMovies] = useState<IResult>()
  useEffect(() => {
    if (results !== undefined) {
      const change = store.get('fav')?.find((fav: IResult) => fav.id === results.id)
        ? Object.assign(results, { fav: true })
        : Object.assign(results, { fav: false })
      setMovies(change)
    }
  }, [results])

  return movies
}
export default useMovieDetail
