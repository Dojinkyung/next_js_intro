import axios from 'axios'

const getCarousel = () => {
  const promise = axios.get(`https://searching-movie.vercel.app/api/movies`, {
    headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
  })
  return promise
}
export default getCarousel
