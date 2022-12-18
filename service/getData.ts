import axios from 'axios'

const getData = (search: string | undefined) => {
  if (search === undefined) {
    return null
  }
  const promise = axios.get(`http://localhost:3000/api/movies/search/${search}`)
  return promise
}
export default getData