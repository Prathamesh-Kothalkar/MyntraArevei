import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category, subcategory } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">
        {subcategory
          ? `${category.charAt(0).toUpperCase() + category.slice(1)} - ${
              subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
            }`
          : `${category.charAt(0).toUpperCase() + category.slice(1)} Page`}
      </h1>
      {/* Render category-specific content here */}
      <p>
        Displaying items for{" "}
        {subcategory
          ? `${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}`
          : `${category.charAt(0).toUpperCase() + category.slice(1)}`}
      </p>
    </div>
  );
};

export default CategoryPage;
