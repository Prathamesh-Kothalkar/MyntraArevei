import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartLoader from "../Components/Loader/CartLoader";

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const [loading, setLoading] = useState(true);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },4000);

    return () => clearTimeout(timer);
  }, [capitalize]);

  return (
    <div className="p-4 mt-52 h-96">
      {loading ? (
        <CartLoader />
      ) : (
        <>
          <h1 className="text-2xl font-bold">
            {subcategory
              ? `${capitalize(category)} - ${capitalize(subcategory)}`
              : `${capitalize(category)} Page`}
          </h1>
          {/* Render category-specific content here */}
          <p>
            Displaying items for{" "}
            {subcategory ? capitalize(subcategory) : capitalize(category)}
          </p>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
