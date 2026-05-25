import React, { createContext, useState } from "react"
import type { MovieType } from "../types/movieTypes"

type WishlistContext = {
  wishData: MovieType[]
  setWishData: React.Dispatch<React.SetStateAction<MovieType[]>>
  toggleWish: (movie: MovieType) => void
}

export const WishListContext = createContext<WishlistContext | null>(null)

export function WishListProvider({ children }: { children: React.ReactNode }) {
  const [wishData, setWishData] = useState<MovieType[]>([])

  function toggleWish(movie: MovieType) {
    setWishData((prev) => {
      const iswish = prev.some((wish) => wish.id === movie.id)

      if (iswish) {
        return prev.filter((wish) => wish.id !== movie.id)
      }

      return [...prev, movie]
    })
  }

  return (
    <WishListContext.Provider
      value={{ wishData, setWishData, toggleWish }}
    >
      {children}
    </WishListContext.Provider>
  )
}