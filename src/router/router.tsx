
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Search from "../pages/Search";
import Recent from "../pages/Recent";
import WishList from "../pages/WishList";


export const router = createBrowserRouter([{
    path: "/",
    element: <Home/>
},{
    path: "/detail/:id"
    ,element: <Detail/>
},
{
    path: '/search'
    ,element: <Search/>
},
{
    path: '/recent'
    ,element: <Recent/>
},
{
    path: '/wishlist'
    ,element: <WishList/>
}
])