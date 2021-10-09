import Axios from 'axios'
import {Movie, MoviesResponse} from "../Domain/Movie"

export const MovieQueryService = {
  getMovies: async (): Promise<Movie[]> => {
    try {
      const response: MoviesResponse = await Axios.get("https://api.themoviedb.org/3/discover/movie?api_key=6b184f9661328e973761ba9aa9c3293b&language=en-US&page=1&vote_average.gte=7.0&with_genres=27")
      return response.data.results
    } catch (e) {
      console.error(e)
      return []
    }
  }
}
