import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

// Sample data for the cart items
const cartItems = [
    {
        id: 1,
        img: "https://via.placeholder.com/150",
        name: "Product 1",
        price: 29.99,
        quantity: 2
    },
    {
        id: 2,
        img: "https://via.placeholder.com/150",
        name: "Product 2",
        price: 49.99,
        quantity: 1
    },
    {
        id: 3,
        img: "https://via.placeholder.com/150",
        name: "Product 3",
        price: 1.99,
        quantity: 3
    },
    {
        id: 4,
        img: "https://via.placeholder.com/150",
        name: "Product 4",
        price: 29.99,
        quantity: 2
    },
];

const CartItem = ({ item }) => {
    return (
        <div className="flex items-center p-4 border-b border-gray-300">
            <div className="">
                <img src={item.img} alt={item.name} className="w-28 h-28 rounded" />
            </div>
            <div className="flex flex-col mx-3 flex-1">
                <h2 className="text-lg font-medium">{item.name}</h2>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <div>
                <Button variant='contained' color='error' startIcon={<Delete />}>Remove</Button>
            </div>
        </div>
    );
};

const Cart = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="max-w-2xl mt-16 mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
           <div className="p-6 bg-white rounded-lg shadow-lg">
    
    <div className="flex justify-between items-center mb-3">
      <span className="text-gray-700">Subtotal</span>
      <span className="text-gray-900 font-semibold">₹{total}</span>
    </div>
    <div className="flex justify-between items-center mb-3">
      <span className="text-gray-700">Discount</span>
      <span className="text-red-600 font-semibold">-₹00</span>
    </div>
    <hr className="border-t-2 border-gray-200 my-4" />
    <div className="flex justify-between items-center">
      <span className="text-xl text-gray-900 font-bold">You Pay</span>
      <span className="text-xl text-green-600 font-bold">₹{total}</span>
    </div>
  </div>
            <div className="mt-6 text-center">
                <Button variant="contained" color="success" size="large">
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    );
};

export default Cart;
