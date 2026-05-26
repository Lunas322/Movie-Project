import type { MovieType } from "../types/movieTypes";
import MovieListCard from "./MovieListCard";

type Props = {
  movieData: MovieType[];
  onMore?: ()=> void
};

function MovieListContainer({ movieData, onMore }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full justify-items-center">

        {movieData?.map((item) => (
          <div key={item.id} className="w-full max-w-55">
            <MovieListCard
              id={item.id}
              title={item.title}
              vote_average={item.vote_average}
              poster_path={item.poster_path}
            />
          </div>
        ))}

      </div>

      {movieData?.length > 10 && (
        <button
          onClick={onMore}
          className="w-90 h-14 bg-white rounded-2xl border border-gray-300 text-gray-800 font-medium shadow-sm hover:bg-gray-300 transition"
        >
          더보기
        </button>
      )}

    </div>
  );
}

export default MovieListContainer;