import axios from 'axios'

const getData = (search: string, page: number) => {
  const promise = axios.get(`http://localhost:3000/api/movies/search/${search}/${page}`)
  return promise
}
export default getData
