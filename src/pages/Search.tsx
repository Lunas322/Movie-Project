import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieListContainer from "../components/MovieListContainer";
import type { MovieType } from "../types/movieTypes";
import { searchMovies } from "../api/movieSearch";
import SearchEmpty from "../components/SearchEmpty";
import Loading from "../common/Loading";

function Search() {
  const [movieTitle, setMovieTitle] = useState("");
  const [searchData, setSearchData] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getSearchData() {
      try {
        setLoading(true);
        const response = await searchMovies(movieTitle);
        setSearchData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getSearchData();
  }, [movieTitle]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMovieTitle(e.target.value);
  }

  return (
    <>
      <div className="w-full min-h-screen bg-black text-white">
        <Header />
        <div className="flex flex-col px-12 py-2">
          <h1 className="text-3xl font-bold mb-6">영화 검색</h1>

          <div className="flex gap-3 mb-10">
            <input
              type="text"
              placeholder="영화 제목을 검색하세요"
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-900 text-white outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          {loading ? (
            <Loading />
          ) : searchData.length > 0 ? (
            <MovieListContainer movieData={searchData}  />
          ) : (
            <SearchEmpty />
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
