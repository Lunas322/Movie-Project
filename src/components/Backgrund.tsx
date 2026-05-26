import type {DetailType } from "../types/movieTypes"

type Props = {
    detail: DetailType
}
function Backgrund ({detail}:Props) {
    return (
              <div className="relative w-full h-[60vh]">
        <img
          src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`}
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black to-transparent" />

        <div className="absolute bottom-10 left-10">
          <h1 className="text-4xl md:text-5xl font-bold">{detail?.title}</h1>

          <p className="text-gray-300 mt-2">
            {detail.release_date.slice(0, 4)} • ⭐ {detail.vote_average}
          </p>
        </div>
      </div>
    )
    
}
export default Backgrund