import { useEffect, useState } from "react";
import Header from "../components/Header"
import MovieListContainer from "../components/MovieListContainer"
import type { MovieType } from "../types/movieTypes";
import { getMovieData } from "../api/movie";

function Home () {

      const [movieData, setMovieData] = useState<MovieType[]>([]);
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
        <>
        <Header/>
        <div className="w-screen h-full bg-black py-10">
        <MovieListContainer movieData={movieData} setPage={setPage}/>
        </div>
        </>
    )
}
export default Home