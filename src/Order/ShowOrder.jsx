import axios from "axios";
import { useEffect, useState } from "react";
const server = import.meta.env.VITE_BACKEND_SERVER;

const ShowOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {

        const response = await axios.get(`${server}/v1/orders/`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setOrders(response.data.orders[0].orders); // Adjust this based on the exact structure of the response
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 py-10 px-4 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>

        {/* Orders Container */}
        <div className="grid grid-cols-1 gap-6">
          {orders.length === 0 ? (
            <div className="text-center text-gray-500">No orders found.</div>
          ) : (
            orders.map((order, index) => (
              <div
                key={order._id}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Order #{index + 1}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.orderStatus === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {order.orderStatus}
                  </span>
                </div>

                {/* Order Items */}
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-600">Items:</h3>
                  <ul className="ml-4 list-disc">
                    {order.items.map((orderItem, idx) => (
                      orderItem.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-900 font-semibold ">
                           <span className="text-lg ">Name:</span> {item.name} <br /> <span className="text-lg ">Quantity:</span> {item.quantity} <br /> <span className="text-lg ">Amount of Each :</span> Rs.{item.price}/-
                        </li>
                      ))
                    ))}
                  </ul>
                </div>

                {/* Order Details */}
                <div className="text-gray-600">
                  <p><strong>Payment ID:</strong> {order.paymentId}</p>
                  <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
                  <p><strong>Amount:</strong> Rs. {order.amount}</p>
                  <p><strong>Address:</strong> {order.address}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowOrder;
