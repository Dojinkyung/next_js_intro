import axios from 'axios'
let ADDRESS = `http://localhost:3000`
if (typeof window !== 'undefined') {
  ADDRESS = window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://searching-movie.vercel.app'
}
const getMovieDetail = (id: number) => {
  console.log(ADDRESS)
  const promise = axios.get(`${ADDRESS}/api/movies/details/${id}`)
  return promise
}
export default getMovieDetail
