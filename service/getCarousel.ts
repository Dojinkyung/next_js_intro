import axios from 'axios'

const getCarousel = () => {
  const promise = axios.get(`http://localhost:3000/api/movies`)
  return promise
}
export default getCarousel
