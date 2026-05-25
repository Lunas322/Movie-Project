import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'
import { RecentProvider } from './context/RecentContext.tsx'
import { WishListProvider } from './context/WishlistContext.tsx'

createRoot(document.getElementById('root')!).render(
  <RecentProvider>
    <WishListProvider>
    <RouterProvider router={router}/>
    </WishListProvider>
    </RecentProvider>
)
