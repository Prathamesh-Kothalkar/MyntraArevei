import axios from 'axios';
import 'animate.css';
import './ProductDetails.css';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import { UserContext } from '../Context/UserContext';

const server = import.meta.env.VITE_BACKEND_SERVER;
export default function ProductDetails() {
    // const [alertMessage, setAlertMessage] = useState('');
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [data, setData] = useState(null);
    const { id } = useParams();
    const [loading,setLoading]=useState(false);
    const {isLogin}=useContext(UserContext);

    const handleClick = async (productId,img_src,name, price, quantity) => {
        setLoading(true);
        //api for add to cart
        try{
            setIsAlertVisible(true);
            const response = await axios.post(`${server}/v1/cart/add`, 
                { productId, img_src, name, price, quantity },
                {
                    headers:{
                        Authorization:"Bearer "+localStorage.getItem("token")
                    }
                }
            );
            
            alert(`Added to Cart`);
            
           
        }
        catch(err){
            console.log(err);
            
        }
        finally{
            setLoading(false);
        }
       
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${server}/v1/product/${id}`);
                setData(response.data);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-24 p-4">
                <div className="">
                    <img src={data.images[0]} alt={data.name} className="w-full h-96 object-contain rounded-lg" />
                </div>
                <div className="">
                    <h1 className="text-2xl font-bold mb-4">{data.name.toUpperCase()}</h1>
                    <p className="text-xl mb-2"><strong>Category:</strong> {data.category.toUpperCase()}</p>
                    <p className="text-lg mb-4"><strong>Description:</strong> {data.description}</p>
                    <p className="text-lg mb-2"><strong>Brand:</strong> {data.brand}</p>
                    <p className="text-lg mb-2"><strong>Sizes:</strong> {data.sizes.join(', ')}</p>
                    <p className="text-lg mb-2"><strong>Colors:</strong> {data.colors.join(', ')}</p>
                    <p className="text-lg mb-4"><strong>Price:</strong> ₹{data.price}</p>
                    <p className="text-lg mb-4"><strong>Stock:</strong> {data.stock > 0 ? `${data.stock} in stock` : 'Out of stock'}</p>
                    {
                        !isLogin?
                        <Button variant='contained' color='success' onClick={()=>{alert("Login First")}} className="">Add to Cart</Button>
                        :
                         !loading?
                         <Button variant='contained' color='success' onClick={()=>{handleClick(data._id,data.images[0],data.name,data.price,1)}} className="">Add to Cart</Button>
                         :
                         <CircularProgress/>
                    }
                </div>
            </div>

            {isAlertVisible && (
                <div className="alert-container">
                    <div className="alert-card">
                        <div className="alert-message">
                            
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
