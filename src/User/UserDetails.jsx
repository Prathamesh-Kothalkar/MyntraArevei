import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from "../Context/UserContext"


export default function UserDetails() {
    const { isLogin } = useContext(UserContext);

    const [addresses, setAddresses] = useState([]);

    const [user, setUser] = useState(null);
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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError(null);
    //     setSuccess(null);
    //     try {
    //         const response = await axios.post(`http://localhost:3000/api/v1/user/address`, {
    //             street,
    //             city,
    //             state,
    //             postalCode,
    //             country,
    //             landmark,
    //             apartmentNumber,
    //         });
    //         setSuccess(response.data.message);
    //     } catch (err) {
    //         setError(err.message);
    //     }
    // };

    useEffect(() => {
        const fetchUserProfile = async () => {
            setErrorUser(null);
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/user/profile`,{
                    headers:{
                        Authorization:"Bearer "+localStorage.getItem("token")
                    }
                });
                console.log(response.data)
            } catch (err) {
                setErrorUser(err.message);
            }
        };
        fetchUserProfile();
    }, []);

    useEffect(() => {
        const fetchAddresses = async () => {
            setErrorAddress(null);
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/user/address`,{
                    headers:{
                        Authorization:"Bearer "+localStorage.getItem("token")
                    }
                });
                console.log(response.data)
            } catch (err) {
                setErrorAddress(err.message);
            }
        };
        fetchAddresses();
    }, []);

    if (errorUser || errorAddress) return <p>Error: {error}</p>;

    return (
        <>
            {
            //     false ?
            //         <div className="mt-56">Login first</div>
            //         :
            //         <div>
            //             <div>
            //                 <h2>User Profile</h2>
            //                 <p>Name: {user.name}</p>
            //                 <p>Phone: {user.phone}</p>
            //                 <p>Email: {user.email}</p>
            //                 <p>Created At: {user.createdAt}</p>
            //                 <p>Updated At: {user.updatedAt}</p>
            //             </div>

            //             <div>
            //                 <h2>Your Addresses</h2>
            //                 {addresses.length > 0 ? (
            //                     <ul>
            //                         {addresses.map((address, index) => (
            //                             <li key={index}>
            //                                 <p>Street: {address.street}</p>
            //                                 <p>City: {address.city}</p>
            //                                 <p>State: {address.state}</p>
            //                                 <p>Postal Code: {address.postalCode}</p>
            //                                 <p>Country: {address.country}</p>
            //                                 <p>Landmark: {address.landmark}</p>
            //                                 <p>Apartment Number: {address.apartmentNumber}</p>
            //                             </li>
            //                         ))}
            //                     </ul>
            //                 ) : (
            //                     <p>No addresses found.</p>
            //                 )}
            //             </div>
            //             <hr />
            //             <div>
            //                 <h2>Add Address</h2>
            //                 {success && <p className="success">{success}</p>}
            //                 {error && <p className="error">{error}</p>}
            //                 <form onSubmit={handleSubmit}>
            //                     <div className="form-group">
            //                         <label htmlFor="street">Street:</label>
            //                         <input
            //                             type="text"
            //                             id="street"
            //                             value={street}
            //                             onChange={(e) => setStreet(e.target.value)}
            //                             required
            //                             className="form-control"

            //                         />
            //                     </div>
            //                     <div className="form-group">
            //                         <label htmlFor="city">City:</label>
            //                         <input
            //                             type="text"
            //                             id="city"
            //                             value={city}
            //                             onChange={(e) => setCity(e.target.value)}

            //                             required
            //                             className="form-control"
            //                         />
            //                     </div>
            //                     <div className="form-group">
            //                         <label htmlFor="state">State:</label>
            //                         <input
            //                             type="text"
            //                             id="state"
            //                             value={state}
            //                             onChange={(e) => setState(e.target.value)}
            //                             required

            //                             className="form-control"
            //                         />
            //                     </div>
            //                     <div className="form-group">
            //                         <label htmlFor="postalCode">Postal Code:</label>
            //                         <input
            //                             type="text"
            //                             id="postalCode"
            //                             value={postalCode}
            //                             onChange={(e) => setPostalCode(e.target.value)}

            //                             required

            //                             className="form-control"
            //                         />
            //                     </div>
            //                     <div className="form-group">
            //                         <label htmlFor="country">Country:</label>
            //                         <input
            //                             type="text"
            //                             id="country"
            //                             value={country}
            //                             onChange={(e) => setCountry(e.target.value)}

            //                             required
            //                             className="form-control"
            //                         />
            //                     </div>
            //                     <div className="form-group">
            //                         <label htmlFor="landmark">Landmark (Optional):</label>
            //                         <input
            //                             type="text"
            //                             id="landmark"
            //                             value={landmark}
            //                             onChange={(e) => setLandmark(e.target.value)}

            //                             className="form-control"
            //                         />
            //                     </div>
            //                     <div className="form-group">
            //                         <label htmlFor="apartmentNumber">Apartment Number (Optional):</label>
            //                         <input
            //                             type="text"
            //                             id="apartmentNumber"
            //                             value={apartmentNumber}
            //                             onChange={(e) => setApartmentNumber(e.target.value)}
            //                             className="form-control"
            //                         />
            //                     </div>
            //                     <button type="submit" className="btn btn-primary">Add Address</button>
            //                 </form>
            //             </div>
            //         </div>
            }
        </>
    );
}