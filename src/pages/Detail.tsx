import { useContext, useEffect, useState } from "react";
import { movieDetail } from "../api/movieDetail";
import { useParams } from "react-router-dom";
import type { DetailType } from "../types/movieTypes";
import Header from "../components/Header";
import { WishListContext } from "../context/WishlistContext";

function Detail() {
  const [detail, setDetail] = useState<DetailType>();
  const { id } = useParams();
  const movieId = Number(id);
  useEffect(() => {
    async function getDetailData() {
      try {
        const response = await movieDetail(movieId);
        setDetail(response);
      } catch (error) {
        console.log(error);
      }
    }
    getDetailData();
  }, []);
  const context = useContext(WishListContext)!;
  const { wishData, toggleWish } = context;

  const wish = wishData.some((movie) => movie.id === movieId);

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      <div className="relative w-full h-[60vh]">
        <img
          src={`https://image.tmdb.org/t/p/w500${detail?.backdrop_path}`}
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black to-transparent" />

        <div className="absolute bottom-10 left-10">
          <h1 className="text-4xl md:text-5xl font-bold">{detail?.title}</h1>

          <p className="text-gray-300 mt-2">
            {detail?.release_date.slice(0, 4)} • ⭐ {detail?.vote_average}
          </p>
        </div>
      </div>

      <div className="px-10 py-10 flex flex-col md:flex-row gap-10">
        <img
          src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
          className="w-64 rounded-xl shadow-lg"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>

          <p className="text-gray-300 leading-relaxed">
            {detail?.overview || "작성된 설명이 없습니다"}
          </p>
          <div className="flex gap-4 mt-6">
            <button
              className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition"
              onClick={() =>
                toggleWish({
                  id: movieId,
                  title: detail?.title ?? "",
                  vote_average: detail?.vote_average ?? 0,
                  poster_path: detail?.poster_path ?? "",
                })
              }
            >
              {wish ? "❤️" : "🤍"} 찜하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
