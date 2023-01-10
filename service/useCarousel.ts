import { IResult } from '../types/result'
import store from 'store'
import { useEffect, useState } from 'react'
const useCarousel = (results: IResult[]) => {
  const [movies, setMovies] = useState<IResult[]>([])
  useEffect(() => {
    if (results !== undefined) {
      const carousel: IResult[] = Array.from(results)
      carousel.map((movieID: IResult) =>
        store.get('fav')?.find((fav: IResult) => fav.id === movieID.id)
          ? Object.assign(movieID, { fav: true })
          : Object.assign(movieID, { fav: false }),
      )
      setMovies(carousel)
    }
  }, [results])

  return movies
}
export default useCarousel
