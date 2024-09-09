import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../Context/UserContext";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const server = import.meta.env.VITE_BACKEND_SERVER;

const CartItem = ({ item, onRemove }) => {
    console.log(item);
    
    return (
        <div className="flex items-center p-4 border-b border-gray-300">
            <div className="">
                <img src={item.img_src} alt={item.name} className="w-28 h-28 rounded" />
            </div>
            <div className="flex flex-col mx-3 flex-1">
                <h2 className="text-lg font-medium">{item.name}</h2>
                <p className="text-gray-600">Price: ₹{item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <div>
                    <Button variant='contained' color='error' startIcon={<Delete />} onClick={() => onRemove(item.productId)}>
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Cart = () => {
    const { isLogin } = useContext(UserContext);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get(`${server}/v1/cart/`, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                
                setItems(response.data.items)
                console.log(items)
            } catch (err) {
                setError('Failed to fetch cart items.');
                console.log(err);
            }
        };

        fetchCart();
    }, []);

    const handleRemove = async (id) => {
        const productId = id._id;
        console.log(productId);
    try {
            const response = await axios.delete(`${server}/v1/cart/remove`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
                data: {
                    productId: productId
                }
            });
    
            console.log(response.data);
    
            setItems(items.filter(item => item.productId._id !== productId));
        } catch (err) {
            console.log('Error removing item:', err);
        }
    };
    

    return (
        <>
            {
                !isLogin ?
                    <div className="mt-56">Login first</div>
                    :
                    <div className="max-w-2xl mt-16 mx-auto p-6 bg-white shadow-md rounded-lg">
                        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
                        {error && <div className="text-red-500 mb-4">{error}</div>}
                        {items.length > 0 ? (
                            <>
                                {items.map(item => (
                                    <CartItem key={item.productId._id} item={item} onRemove={handleRemove} />
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
                                    <Button variant="contained" color="success" size="large" onClick={()=>{navigate("/details")}}>
                                        Proceed to Checkout
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div>Your cart is empty.</div>
                        )}
                    </div>
            }
        </>
    );
};

export default Cart;
