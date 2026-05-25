import { useContext } from "react";
import { WishListContext } from "../context/WishlistContext";
import type { DetailType } from "../types/movieTypes";

type Props = {
    detail: DetailType
    movieId : number
}

function DetailCard ({detail,movieId}:Props) {
    const context = useContext(WishListContext)!;
    const { wishData, toggleWish } = context;
    const wish = wishData.some((movie) => movie.id === movieId);
    return(
        <>
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
        </>
    )
}
export default DetailCard