export interface IRootObject {
  page: number
  results: IResult[]
  total_pages: number
  total_results: number
}

export interface IResult {
  fav?: boolean
  homepage: string
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  runtime: number
  status: string
  vote_average: number
  vote_count: number
  genres: Igenres[]
}
export interface Igenres {
  id: number
  name: string
}
