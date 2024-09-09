import { Button } from "@headlessui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
// import Button from "@material-ui/Button"; 
function ProductItem({ images, name, price, stock, id }) {
    const navigate = useNavigate();
  const handleViewProduct = () => {
    // alert(`Product ID: ${id}`);
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-item flex flex-col bg-white shadow-lg rounded-lg overflow-hidden m-2">
      <div className="product-image">
        <img
          src={images[0]}
          alt={name}
          className="w-64 h-64 object-fill"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="product-name font-bold text-lg mb-2 text-gray-800">
          {name}
        </div>
        <div className="product-info flex justify-between items-center text-gray-600 text-sm mb-4">
          <div className="product-price text-xl text-gray-800 font-semibold">
            ${price.toFixed(2)}
          </div>
          <div className="product-stock">
            {stock > 0 ? `In Stock: ${stock}` : "Out of Stock"}
          </div>
        </div>
        <Button
          fullWidth
          className="mt-auto"
          onClick={handleViewProduct}
        >
          View Product
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
