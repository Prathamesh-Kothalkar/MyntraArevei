import HeroSlideShow from "./HeroSlideShow"
import {images,links} from '../../assets/data.js';
import {images2,links2} from "../../assets/data2.js"
import ProductSlideShow from "./ProductSlideShow.jsx";
import ShopCategory from "./ShopCategory";

const Home =()=>{
    return <>
        <HeroSlideShow/>
        <ProductSlideShow text={"Medal Worthy Brands To Bag"} images={images2} links={links2} />
        <ProductSlideShow text={"Grand Global Brands"} images={images} links={links}/>
        <ShopCategory/>
    </>
}

export default Home;