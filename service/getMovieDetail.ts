import axios from 'axios'
const getMovieDetail = (id: number) => {
  const promise = axios.get(`https://searching-movie.vercel.app/api/movies/details/${id}`, {
    headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
  })
  return promise
}
export default getMovieDetail
