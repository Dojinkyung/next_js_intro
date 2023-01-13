import axios from 'axios'

const getMovieDetail = (id: number) => {
  const promise = axios.get(`http://localhost:3000/api/movies/details/${id}`)
  return promise
}
export default getMovieDetail
