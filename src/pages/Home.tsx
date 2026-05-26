import { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieListContainer from "../components/MovieListContainer";
import type { MovieType } from "../types/movieTypes";
import { getMovieData } from "../api/movie";
import Error from "../common/Error";
import Loading from "../common/Loading";

function Home() {
  const [movieData, setMovieData] = useState<MovieType[]>([]);
  const [page, setPage] = useState(1);
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    async function movieList() {
      try {
        setLoading(true)
        const data = await getMovieData(page);
        setMovieData((prev) => [...prev, ...data]);
      } catch (error) {
        console.log(error);
      } finally{
        setLoading(false)
      }
    }
    movieList();
  }, [page]);

  if(loading) return <Loading/>
  if(!movieData) return <Error/>
  return (
    <>
      <Header />
      <div className="w-screen h-full bg-black py-10">
        <MovieListContainer movieData={movieData} onMore={()=>setPage((prev)=>prev+1)} />
      </div>
    </>
  );
}
export default Home;
