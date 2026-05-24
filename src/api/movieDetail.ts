import { api } from "./tmdb";

export async function movieDetail(id: number) {
  const response = await api.get(`/movie/${id}`);
  return response.data;
}
