
import React from 'react';
import { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';

const Hero = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [text, setTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=43668618-da5b7c392480d90d5ab97297b&q=${text}`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits);
                setIsLoading(false);
                console.log(data);
            })
            .catch(err => console.log(err));
    }, [text]);
    console.log(text)
    return (
        <div className="container mx-auto">
            <ImageSearch searchText={(text) => setTerm(text)} />

            {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}

            {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
                {images.map(image => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </div>}
        </div>

    )
}


export default Hero