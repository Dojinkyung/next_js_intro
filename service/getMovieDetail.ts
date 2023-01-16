import axios from 'axios'
const getMovieDetail = (id: number) => {
  const promise = axios.get(`https://searching-movie.vercel.app/api/movies/details/${id}`)
  return promise
}
export default getMovieDetail
