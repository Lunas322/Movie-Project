import { useContext, useState } from "react"
import Header from "../components/Header"
import MovieListContainer from "../components/MovieListContainer"
import { RecentContext } from "../context/RecentContext"

function Recent () {
    const context = useContext(RecentContext)
    const [page, setpage] = useState(1)

    if (!context) return null
    const {recentMovie} = context
    return(
        <>
        <Header/>
      <div className="w-full min-h-screen bg-black text-white py-10">
        <MovieListContainer movieData={recentMovie} setPage={setpage}/>
        </div>
        </>
    )
}
export default Recent