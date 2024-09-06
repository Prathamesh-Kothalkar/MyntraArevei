import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from "../Context/UserContext"
import "./UserDetails.css";
import 'animate.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const server = import.meta.env.VITE_BACKEND_SERVER;


export default function UserDetails() {
    const [addAdress, setAddAdress] = useState(false);
    const [renderCount, setRenderCount] = useState(0);
    const navigate=useNavigate();

    useEffect(() => {
        if (renderCount < 2) {
            setRenderCount(renderCount + 1);
        }
    }, [renderCount]);

    const { isLogin } = useContext(UserContext);

    const [addresses, setAddresses] = useState([]);

    const [user, setUser] = useState([]);
    // const [user, setUser] = useState({
    //     name: "Anonymous",
    //     phone: "+919869696969",
    //     email: "coolDude69@gmail.com",
    //     createAt: "2024-08-26T15:27:45.015Z",
    //     updateAt: "2024-08-26T15:27:45.015Z"
    // });
    const [errorUser, setErrorUser] = useState(null);
    const [errorAddress, setErrorAddress] = useState(null);

    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [landmark, setLandmark] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        try {
            const response = await axios.post(`${server}/v1/user/address`, {
                street,
                city,
                state,
                postalCode,
                country,
                landmark,
                apartmentNumber,
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setSuccess(response.data.message);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        const fetchUserProfile = async () => {
            setErrorUser(null);
            try {
                if (isLogin) {
                    const response = await axios.get(`${server}/v1/user/profile`, {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    });
                    const udata = await response.data;
                    setUser(udata);
                    console.log(response.data)
                }
            } catch (err) {
                setErrorUser(err.message);
            }
        };
        fetchUserProfile();
    }, [renderCount]);

    useEffect(() => {
        const fetchAddresses = async () => {
            setErrorAddress(null);
            try {
                if (isLogin) {
                    const response = await axios.get(`${server}/v1/user/address`, {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    });
                    const Adata = await response.data;
                    setAddresses(Adata.address);
                    console.log(response.data);
                }
            } catch (err) {
                setErrorAddress(err.message);
            }
        };
        fetchAddresses();
    }, [renderCount]);

    //convert time format
    function convertUTCToLocalTime(utcTime) {
        const date = new Date(utcTime);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        return `${formattedDate} ${formattedTime}`;
    }


    if (errorUser || errorAddress) return <p>Error: {errorUser} AND {errorAddress}</p>;

    return renderCount <= 2 ? (
        <div>
            {
                !isLogin ?
                    <div className=" containerUserDetails">
                        <div className="alertUserDetails"><strong>OOPS!</strong> Login first</div>
                    </div>
                    :
                    <div className='containerUserDetails'>
                        <div className="card1UserDetails">
                            <div className="">
                            <i class="fa-solid fa-user"></i>
                            </div>
                            <br />
                            <div className="mt-3">
                                <Button variant='contained' className='m-2' color='success' onClick={()=>setAddAdress(!addAdress)}>Add Address</Button>
                                <Button variant='contained' className='m-2' color='warning' onClick={()=>navigate("/myorders")}>My Orders</Button>
                            </div>
                           
                            
                        </div>
                        <div className="card1UserDetails">
                            <div className='detailheadingUserDetails animate__animated animate__lightSpeedInLeft animate__delay-0s'>User Details</div>
                            <div className='detailUserDetails1 animate__animated animate__rotateInDownLeft  animate__delay-1s'><strong>Name: </strong>{user.name}</div>
                            <div className='detailUserDetails2 animate__animated animate__rotateInDownLeft  animate__delay-2s'><strong>Phone: </strong>{user.phone}</div>
                            <div className='detailUserDetails3 animate__animated animate__rotateInDownLeft  animate__delay-3s'><strong>Email: </strong>{user.email}</div>
                            <div className='detailUserDetails4 animate__animated animate__rotateInDownLeft  animate__delay-4s'><strong>Created At: </strong>{convertUTCToLocalTime(user.createAt)}</div>
                            <div className='detailUserDetails5 animate__animated animate__rotateInDownLeft  animate__delay-5s'><strong>Updated At: </strong>{convertUTCToLocalTime(user.updateAt)}</div>
                        </div>
                        <hr />
                        <div className="card1UserDetails">
                            <div className='detailheadingUserDetails animate__animated animate__lightSpeedInRight animate__delay-0s'>Address</div>
                            {addresses.length > 0 ? (
                                <ul>
                                    <div className="adresscards">
                                        {addresses.map((address, index) => (
                                            <div key={index}>
                                                <div className='detailAddressUserDetails1  animate__animated animate__backInUp animate__delay-1s'><strong>Apartment Number: </strong>{address.apartmentNumber}</div>
                                                <div className='detailAddressUserDetails2  animate__animated animate__backInUp animate__delay-2s'><strong>Street: </strong>{address.street}</div>
                                                <div className='detailAddressUserDetails3  animate__animated animate__backInUp animate__delay-3s'><strong>City: </strong>{address.city}</div>
                                                <div className='detailAddressUserDetails4  animate__animated animate__backInUp animate__delay-4s'><strong>Landmark: </strong>{address.landmark}</div>
                                                <div className='detailAddressUserDetails5  animate__animated animate__backInUp animate__delay-5s'><strong>State: </strong>{address.state}</div>
                                                <div className='detailAddressUserDetails6  animate__animated animate__backInUp animate__delay-5s'><strong>Country: </strong>{address.country}</div>
                                                <div className='detailAddressUserDetails7  animate__animated animate__backInUp animate__delay-5s'><strong>Postal Code: </strong>{address.postalCode}</div>
                                            </div>
                                        ))}
                                    </div>
                                </ul>
                            ) : (
                                <div className='detailAddressUserDetails1  animate__animated animate__wobble animate__delay-1s'>No addresses stored</div>
                            )}
                        </div>
                        <hr />
                        <div>
                            { addAdress ?
                            <div className='adresscontainer'>
                                <div className="AdressHeading">
                                    <div>
                                        ADD ADDRESS
                                    </div>
                                    <div>
                                    <i class="fa-solid fa-xmark" onClick={()=>setAddAdress(!addAdress)}></i>
                                    </div>
                                </div>
                                {success && <p className="success">{success}</p>}
                                {error && <p className="error">{error}</p>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="userDetailsLabel" htmlFor="street">Street:</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        id="street"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                        required
                                        className="form-control inputclass"

                                    />
                                </div>
                                <div className="form-group">
                                    <label className="userDetailsLabel" htmlFor="city">City:</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        id="city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}

                                        required
                                        className="form-control inputclass"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="userDetailsLabel" htmlFor="state">State:</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        id="state"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        required

                                        className="form-control inputclass"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="userDetailsLabel" htmlFor="postalCode">Postal Code:</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        id="postalCode"
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}

                                        required

                                        className="form-control inputclass"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="userDetailsLabel" htmlFor="country">Country:</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        id="country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}

                                        required
                                        className="form-control inputclass"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="userDetailsLabel" htmlFor="landmark">Landmark (Optional):</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        id="landmark"
                                        value={landmark}
                                        onChange={(e) => setLandmark(e.target.value)}

                                        className="form-control inputclass"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="userDetailsLabel" htmlFor="apartmentNumber">Apartment Number (Optional):</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        id="apartmentNumber"
                                        value={apartmentNumber}
                                        onChange={(e) => setApartmentNumber(e.target.value)}
                                        className="form-control inputclass"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary userDetailsButton">Add Address</button>
                            </form>
                            </div>
                            :
                            <div></div>
                            }
                        </div>
                    </div>
            }
        </div>
    ) : null;
}
