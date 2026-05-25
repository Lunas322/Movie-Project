import { useNavigate } from "react-router-dom";
import type { MovieType } from "../types/movieTypes";
import { useContext } from "react";
import { RecentContext } from "../context/RecentContext";

function MovieListCard({ poster_path, title, vote_average, id }: MovieType) {
  const nav = useNavigate();
  const context = useContext(RecentContext);
  if (!context) return null;
  const { setRecentMovie } = context;
  function recentAdd() {
    setRecentMovie((prev) => {
      const filter = prev.filter((movie) => movie.id !== id);
      return [{ id, poster_path, title, vote_average }, ...filter];
    });
    nav(`/detail/${id}`);
  }

  return (
    <>
      <div
        className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
        onClick={() => recentAdd()}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          className="w-full h-72"
        />

        <div className="p-4">
          <h3 className="text-white text-lg font-semibold truncate">{title}</h3>

          <p className="text-gray-400 text-sm mt-1">⭐ {vote_average}</p>
        </div>
      </div>
    </>
  );
}
export default MovieListCard;
