import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartLoader from "../Components/Loader/CartLoader";
import HeroSlideShow from "../Components/Home/HeroSlideShow";
import Section from "./Section";
import axios from "axios";
import ProductItem from "./Products";
const server = import.meta.env.VITE_BACKEND_SERVER;

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${server}/v1/product/category/${category}`);
        setData(response.data.products);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [category]);

  return (
    <>
      {loading ? (
        <div className="h-100">
          <div className="mt-28">
            <CartLoader />
          </div>
        </div>
      ) : (
        <div>
          <HeroSlideShow />
          <Section text={category} />
          <Section text={category} />
          <Section text={category} />
          <Section text={category} />

          <div className="flex flex-wrap">
            {data.map((product) => (
              <ProductItem
                key={product._id}
                id={product._id}
                images={product.images}
                name={product.name}
                price={product.price}
                stock={product.stock}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
