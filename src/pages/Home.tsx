import Header from "../components/Header"
import MovieListContainer from "../components/MovieListContainer"

function Home () {
    return (
        <>
        <div className="w-screen h-screen bg-white">
        <Header/>
        <MovieListContainer/>
        </div>
        </>
    )
}
export default Home