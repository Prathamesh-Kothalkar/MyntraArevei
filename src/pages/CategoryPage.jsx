import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartLoader from "../Components/Loader/CartLoader";
import HeroSlideShow from "../Components/Home/HeroSlideShow"
import Section from "./Section";
const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const [loading, setLoading] = useState(true);
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return ()=> clearTimeout(timer);
  }, [category])
  return (
    <>
      {
        loading ?

          <div className="h-100">
            <div className="mt-28">
            <CartLoader />
              </div> 
          </div>
          
          :
          <div className="">
            <div className="">
              <HeroSlideShow />
            </div>
            <Section text={category} />
            <Section text={category} />
            <Section text={category} />
            <Section text={category} />
          </div>
      }
    </>
  );
};

export default CategoryPage;
