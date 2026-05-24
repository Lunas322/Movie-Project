import { useEffect, useState } from "react";
import { getMovieData } from "../api/movie";
import type { Movie } from "../types/movieTypes";
import MovieListCard from "./MovieListCard";
import { pageCount } from "../util/pageCount";



function MovieListContainer() {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [page,setPage] = useState(1)
  

  useEffect(() => {
    async function movieList() {
      try {
        const data = await getMovieData(page);
        setMovieData((prev)=> [...prev, ...data]);
      } catch (error) {
        console.log(error);
      }
    }
    movieList();
  }, [page]);

  return (
    <div className="w-full min-h-screen bg-black px-10 py-4 flex justify-center flex-col items-center gap-7">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movieData?.map((item) => (
          <MovieListCard title={item.title} vote_average={item.vote_average} poster_path={item.poster_path}/>
        ))}
      </div>
      <button onClick={()=>pageCount({setPage})} className="w-90 h-14 bg-white rounded-2xl border border-gray-300 text-gray-800 font-medium shadow-sm hover:bg-gray-300 transition">
  더보기
</button>
    </div>
  );
}

export default MovieListContainer;
