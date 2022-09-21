import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";

import { useFechGifs } from "../hooks/useFechGifs";
import { getGitfs } from "../helpers/getGifs";

// 

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFechGifs( category );
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Espera un momento...</h2>
            }
            <div className="card-grid">
                {
                    images.map(( images ) => (
                        <GifItem
                            key = { images.id }
                            {... images}
                        />
                    ))
                }
            </div>
        </>
    )
}
