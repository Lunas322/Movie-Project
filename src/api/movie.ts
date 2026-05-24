import { api } from "./tmdb";

export async function getMovieData(page: number) {
  const response = await api.get("/movie/popular", { params: { page } });
  return response.data.results;
}
