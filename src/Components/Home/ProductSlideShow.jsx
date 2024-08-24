import React from 'react';
import { Slide } from "react-slideshow-image";

const ProductSlideShow = ({ text,images,links }) => {
    console.log(images);
    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ];

    
    return (
        <div className="p-1">
            <div className="text-head-text text-start text-3xl uppercase font-semibold p-2 mt-5 my-5">
                {text}
            </div>
            <div className="mt-3">
                <Slide slidesToScroll={4} slidesToShow={6} indicators={true} responsive={responsiveSettings}>
                    {images.map((each, index) => (
                        <div key={index} style={{ width: "100%" }}>
                            <a href={links[index]}>
                                <img
                                    style={{ objectFit: "fit", width: "100%", height: "250px" }}
                                    alt="Slide Image"
                                    src={each}
                                    className=""
                                />
                            </a>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    );
}

export default ProductSlideShow;
