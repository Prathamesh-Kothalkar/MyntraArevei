import { Button, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const server = import.meta.env.VITE_BACKEND_SERVER;
export default function BuyOrder() {
  const [address, setAddress] = useState([]);
  const [payment, setPayment] = useState(0);
  const [orderAddress, setOrderAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("Online");
  const [name, setName] = useState("");
  const [phone, setPhoneNumber] = useState(0);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const handleSubmit = async () => {
    if (orderAddress === "" || name === "" || phone === 0) {
      alert("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      // Step 1: Create Order from Backend
      const { data } = await axios.post(
        `${server}/v1/payment/order`,
        { amount: payment }, // Razorpay expects amount in paise
        {
          headers: {
            Authorization:"Bearer "+localStorage.getItem("token"),
          },
        }
      );

      // Step 2: Initiate Razorpay Payment
      const options = {
        key: "rzp_test_sy0ik5pd9JpjmO", // Razorpay Key ID
        amount: data.amount,
        currency: "INR",
        name: "Arevei Company Ltd",
        description: "Purchase Product",
        image: "https://www.arevei.com/assets/images/Arevei%20Wordmark.svg", // Optional
        order_id: data.id, // Backend Order ID
        handler: async function (response) {
          // Payment successful, send data to backend
          const orderData = {
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
            address: `${name}, Mobile ${phone}, Address: ${orderAddress}`,
          };

          const result = await axios.post(
            `${server}/v1/orders`,
            orderData,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );

          console.log(result.data);
          navigate("/myorders")
        },
        prefill: {
          name: name,
          email: "useremail@example.com", // Optional
          contact: phone,
        },
        theme: {
          color: "#F37254",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      alert(`${err}`);
      console.log(err);
    }
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get(`${server}/v1/user/address`, {
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
        const response = await axios.get(`${server}/v1/cart/details`, {
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
        {
          !loading?
          <Button variant="contained" color="primary" className="w-full py-2" onClick={handleSubmit}>
          Payment & Purchase
        </Button>:
        <CircularProgress/>
        }
      </div>
    </div>
  );
}
