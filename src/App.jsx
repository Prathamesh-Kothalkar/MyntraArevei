import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './contactUs/contact'
import Login from "./login/login";
import SignUp from "./signUp/signUp";
import CategoryPage from './pages/CategoryPage.jsx'
import {UserContextProvider} from "./Context/UserContext.jsx"
import Cart from './Cart/Cart.jsx'
import ProductDetails from './productDetails/productDetails.jsx'


function App() {

////////////////////////////////////
// const [data, setData] = useState([]);

//  useEffect(() => {
//    fetchData();
//  }, []);

//    const fetchData = async () => {
//      const response = await axios.get("");
//      console.log("response", response);
//      setData(response.data);
//    };
////////////////////////////////////



  return (
    <>
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/:category/:subcategory" element={<CategoryPage />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App
