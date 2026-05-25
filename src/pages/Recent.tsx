import { useContext } from "react";
import Header from "../components/Header";
import MovieListContainer from "../components/MovieListContainer";
import { RecentContext } from "../context/RecentContext";
import RecentEmpty from "../components/RecentEmpty";

function Recent() {
  const { recentMovie } = useContext(RecentContext)!;

  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-black text-white py-10">
        {recentMovie.length ? (
          <MovieListContainer movieData={recentMovie} />
        ) : <RecentEmpty/>}
      </div>
    </>
  );
}
export default Recent;
