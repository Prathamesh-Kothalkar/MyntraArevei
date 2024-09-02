import axios from 'axios';
import 'animate.css';
import { Height } from '@mui/icons-material'
import './ProductDetails.css'
import { useState, useEffect } from 'react';
const apiUrl = 'https://api.example.com/data';
export default function ProductDetails() {
    const [alertMessage, setAlertMessage] = useState('');
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [data, setData]= useState([]);
    const handleClick = () => {
        setAlertMessage('Added to Cart');
        setIsAlertVisible(true);
        setTimeout(() => {
            setIsAlertVisible(false);
        }, 3000);
    };




    // function Cartfn() {
    // };

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
                    Product name
                </div>
                <hr className='productDetailshr' />
                <div className="productDetailsHeading2">
                    Product category
                </div>
                <hr className='productDetailshr' />
                <div className="productDetailsimg">
                    <img src="src\assets\pic1.png" alt="product pic" style={{ width: '80%' }} />
                </div>
                <hr className='productDetailshr' />

                <ul>
                    <li>
                        <div className="productDetailsHeading3">
                            Product&nbsp;<i><b>category</b></i>
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