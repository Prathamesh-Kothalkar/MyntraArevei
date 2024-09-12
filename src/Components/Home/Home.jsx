import HeroSlideShow from "./HeroSlideShow"
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@mui/material";
import ShopCategory from "./ShopCategory"
import ProductSlideShow from "./ProductSlideShow";
const server = import.meta.env.VITE_BACKEND_SERVER;

const Home = () => {
    const [images1, setImages1] = useState([]);
    const [links1, setLinks1] = useState([]);
    const [images2, setImages2] = useState([]);
    const [links2, setLinks2] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${server}/v1/home/Grand Global`);
                const response2 = await axios.get(`${server}/v1/home/Medal Worthy`);

                // Accessing the first slide in the array
                const data1 = response.data.slides[0]; 
                const data2 = response2.data.slides[0];

                // Setting images and links separately
                setImages1(data1.images || []); 
                setLinks1(data1.links || []);
                setImages2(data2.images || []);
                setLinks2(data2.links || []);

                console.log("Images2:", images2);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <HeroSlideShow />
            {!isLoading ? (
                <div className="">
                    <ProductSlideShow text={"Medal Worthy Brands To Bag"} images={images1} links={links1} />
                    <ProductSlideShow text={"Grand Global Brands"} images={images2} links={links2} />
                </div>
            ) : (
                <div className="">
                    <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
                    <Skeleton variant="rectangular" className="mt-9" width={"100%"} height={"200px"} />
                </div>
            )}
            <ShopCategory />
        </>
    );
}

export default Home;
