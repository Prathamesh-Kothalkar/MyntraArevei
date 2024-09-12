import { Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const server = import.meta.env.VITE_BACKEND_SERVER;

const HeroSlideshow = () => {
    const [images, setImages] = useState([]);
    const [links, setLinks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${server}/v1/home/Hero`);
                const data = response.data.slides[0]; // Access the first element in the slides array
                setImages(data.images || []); // Set images array
                setLinks(data.links || []); // Set links array
            } catch (err) {
                console.error('Failed to fetch data:', err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {
                !isLoading ?
                    images.length > 0 ? (
                        <div className="mt-24">
                            <Slide scale={1.4} indicators={true}>
                                {images.map((image, index) => (
                                    <div key={index} style={{ width: "100%" }}>
                                        <a href={links[index] || "#"}> {/* Use the corresponding link */}
                                            <img
                                                alt={`Slide ${index}`}
                                                src={image}
                                                className="object-fit w-full h-44 md:h-auto"
                                            />
                                        </a>
                                    </div>
                                ))}
                            </Slide>
                        </div>
                    ) : (
                        <div className="mt-24 text-center">
                            <p>No slides available.</p>
                        </div>
                    ) :
                    <div className="mt-24">
                        <Skeleton variant='rectangular' key="loading-skeleton" style={{height:"250px"}} className='h-44 md:h-100 w-full' />
                    </div>
            }
        </>
    );
};

export default HeroSlideshow;
