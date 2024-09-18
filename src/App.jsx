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
import UserDetails from './User/UserDetails.jsx'
import BuyOrder from './Order/BuyOrder.jsx'
import AddProduct from './pages/addProduct.jsx'
import ShowOrder from "./Order/ShowOrder.jsx"
import SearchProductPage from './pages/searchProductPage.jsx'


function App() {



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
          <Route path="/user" element={<UserDetails />}></Route>
          <Route path='/details' element={<BuyOrder/>}></Route>
          <Route path='/addProduct' element={<AddProduct/>}></Route>
          <Route path='/myorders' element={<ShowOrder/>}></Route>
          <Route path='/search' element={<SearchProductPage/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App
