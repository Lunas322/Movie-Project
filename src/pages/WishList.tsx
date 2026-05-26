import { useContext } from "react"
import Header from "../components/Header"
import MovieListContainer from "../components/MovieListContainer"
import { WishListContext } from "../context/WishlistContext"
import WishListEmpty from "../components/WishListEmpty"

function WishList () {
    const {wishData} = useContext(WishListContext)!
    return (
    <>
    <Header/>
      <div className="w-full min-h-screen bg-black text-white py-10">
        {wishData.length ?
        <MovieListContainer movieData={wishData}/> :
        <WishListEmpty/>
    }

</div>
    </>
    )
}
export default WishList