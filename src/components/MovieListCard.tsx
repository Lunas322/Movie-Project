import type { Movie } from "../types/movieTypes"


function MovieListCard ({poster_path,title,vote_average}:Movie) {
    return (
        <>
        <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              className="w-full h-72"
            />

            <div className="p-4">
              <h3 className="text-white text-lg font-semibold truncate">
                {title}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                ⭐ {vote_average}
              </p>
            </div>
          </div>
        </>
    )
}
export default MovieListCard