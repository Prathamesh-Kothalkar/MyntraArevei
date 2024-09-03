import axios from 'axios';
import 'animate.css';
import { Height } from '@mui/icons-material'
import './ProductDetails.css'
import { useState, useEffect } from 'react';
export default function ProductDetails() {

    const [alertMessage, setAlertMessage] = useState('');
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [data, setData] = useState({
        name: "shirt",
        description: "a blue check shirt",
        price: 2000,
        category: "men",
        brand: "zudio",
        sizes: "L",
        colors: "blue",
        images: "https://images.unsplash.com/photo-1485218126466-34e6392ec754?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stock: 5
    });
    const handleClick = () => {
        setAlertMessage('Added to Cart');
        setIsAlertVisible(true);
        setTimeout(() => {
            setIsAlertVisible(false);
        }, 3000);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/data');
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="productDetailsContainer">
            <div className="productDetailsCard">
                <div className="productDetailsHeading1">
                    {data.name.toLocaleUpperCase()}
                </div>
                <hr className='productDetailshr' />
                <div className="productDetailsHeading2">
                    {data.category.toLocaleUpperCase()}
                </div>
                <hr className='productDetailshr' />
                <div className="productDetailsimg">
                    <img src={data.images} alt="product pic" style={{ width: '80%' }} />
                </div>
                <hr className='productDetailshr' />

                <ul>
                    <li>
                        <div className="productDetailsHeading3">
                        Description:&nbsp;<i><b>{data.description}</b></i>
                        </div>
                    </li>
                    <li>
                        <div className="productDetailsHeading3">
                        Brand:&nbsp;<i><b>{data.brand}</b></i>
                        </div>
                    </li>
                    <li>
                        <div className="productDetailsHeading3">
                        Size:&nbsp;<i><b>{data.sizes}</b></i>
                        </div>
                    </li>
                    <li>
                        <div className="productDetailsHeading3">
                        Colours:&nbsp;<i><b>{data.colors}</b></i>
                        </div>
                    </li>
                    <li>
                        <div className="productDetailsHeading3">
                        Price:&nbsp;₹&nbsp;<i><b>{data.price}</b></i>
                        </div>
                    </li>
                    <li>
                        <div className="productDetailsHeading3">
                        Stock:&nbsp;<i><b>{data.stock}</b></i>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="productDetailsButtons">
                <div className='productDetailsButton' onClick={handleClick}>Add to Cart</div>
            </div>

            {/* //alert */}
            {isAlertVisible && (
                <div className="alertproductDetailsContainer">
                    <div className="alertproductDetailsCard">
                        <div className="alertMessage showlater"><i class="fa-solid fa-plane"></i></div>
                        <div className="alertMessage showfirst">{alertMessage}</div>
                    </div>
                </div>
            )}
        </div>
    )
};