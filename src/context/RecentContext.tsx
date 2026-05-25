import React, { createContext, useState, type Dispatch, type SetStateAction } from "react";
import type { MovieType } from "../types/movieTypes";

export const RecentContext = createContext<Recent|null>(null)

type Recent = {
    recentMovie: MovieType[]
    setRecentMovie: Dispatch<SetStateAction<MovieType[]>>
}

export function RecentProvider ({children}:{children:React.ReactNode}) {
        const [recentMovie, setRecentMovie] = useState<MovieType[]>([])
    
    return (
        <RecentContext.Provider value={{recentMovie,setRecentMovie}}>
            {children}
        </RecentContext.Provider>
    )
}