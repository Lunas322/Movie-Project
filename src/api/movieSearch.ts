import { api } from "./tmdb";

export async function searchMovies(movieTitle: string) {
  const response = await api.get("/search/movie", {
    params: {
      query: movieTitle,
    },
  });
  return response.data.results;
}
