import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BuyOrder() {
  const [address, setAddress] = useState([]);
  const [payment, setPayment] = useState(0);
  const [orderAddress, setOrderAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("Online");
  const [name,setName]=useState("");
  const [phone,setPhoneNumber]=useState(0);

  const handleSubmit = () => {
    if (orderAddress === "" || name=== "" || phone==0) {
      alert("Please select an address");
      return;
    }
    alert(`Name: ${name}, Mobile ${phone}, Address: ${orderAddress}, Payment: Rs.${payment}, Mode: ${paymentMode}`);
  };

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/user/address`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setAddress(response.data.address);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchPayment = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/cart/details`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setPayment(response.data.total);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAddress();
    fetchPayment();
  }, []);

  return (
    <div className="max-w-lg mt-24 m-2 mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
        
            <input
              type="text"
              name="name"
              className=""
                placeholder="Name"
              onChange={(e) => setName(e.target.value)}/>
            
          
            <input
              type="tel"
              name="phone"
              className=""
              placeholder="9876543210"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          
        </div>
      <div className="mb-4">
        <Typography variant="h5" className="text-2xl font-semibold mb-4">
          Select Address
        </Typography>
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => setOrderAddress(e.target.value)}
        >
          <option value="">Select an address</option>
          {address.map((item, index) => (
            <option key={index} value={`${item.apartmentNumber}, ${item.street}, ${item.city}, ${item.state}, ${item.postalCode}, ${item.country}`}>
              {item.apartmentNumber}, {item.street}, {item.city}, {item.state}, {item.postalCode}, {item.country}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <Typography variant="h5" className="text-2xl font-semibold mb-4">
          Payment Mode
        </Typography>
        <div className="space-x-4">
        
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="payment"
              className="form-radio text-indigo-600"
              value="Online"
              checked={paymentMode === "Online"}
              onChange={() => setPaymentMode("Online")}
            />
            <span className="ml-2">Online</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="payment"
              className="form-radio text-indigo-600"
              value="Cash on Delivery"
              disabled
              checked={paymentMode === "Cash on Delivery"}
              onChange={() => setPaymentMode("Cash on Delivery")}
            />
            <span className="ml-2">Cash on Delivery</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <Typography variant="h5" className="text-2xl font-semibold mb-4">
          Pay Total
        </Typography>
        <p className="text-lg font-medium">Rs. {payment}</p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          By continuing the purchase, I understand the refund policy.
        </p>
      </div>

      <div className="text-center">
        <Button variant="contained" color="primary" className="w-full py-2" onClick={handleSubmit}>
          Payment & Purchase
        </Button>
      </div>
    </div>
  );
}
