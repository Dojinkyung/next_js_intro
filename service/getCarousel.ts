import axios from 'axios'

const getCarousel = () => {
  const promise = axios.get(`https://searching-movie.vercel.app/api/movies`)
  return promise
}
export default getCarousel
