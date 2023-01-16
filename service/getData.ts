import axios from 'axios'

const getData = (search: string, page: number) => {
  const promise = axios.get(`https://searching-movie.vercel.app/api/movies/search/${search}/${page}`, {
    headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
  })

  return promise
}
export default getData
