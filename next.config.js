const API_KEY = process.env.REACT_APP_API_KEY

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en`,
      },
      {
        source: '/api/movies/details/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=en`,
      },
      {
        source: '/api/movies/search/:query/:page',
        destination: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=:query?&page=:page?&include_adult=false`,
      },
    ]
  },
}
