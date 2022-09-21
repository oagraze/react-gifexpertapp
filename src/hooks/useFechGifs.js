import { useState, useEffect } from "react"
import { getGitfs } from "../helpers/getGifs";

export const useFechGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async () => {
        const newImages = await getGitfs( category );
        setImages( newImages );
        setIsLoading(false);
    }

    // Disparador de efectos secundarios
    useEffect(() => {
        getImages();
    }, [])
    // Llaves vacias cada, se dispara una sola vez

    return {
        images,
        isLoading
    }
}
