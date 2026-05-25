import { useContext, useState } from "react"
import Header from "../components/Header"
import MovieListContainer from "../components/MovieListContainer"
import { WishListContext } from "../context/WishlistContext"

function WishList () {
    const context = useContext(WishListContext)
    if(!context) return null
    const {wishData} = context
    const [page, setpage] = useState(1)
    return (
    <>
    <Header/>
      <div className="w-full min-h-screen bg-black text-white py-10">
        <MovieListContainer movieData={wishData} setPage={setpage}/>
</div>
    </>
    )
}
export default WishList