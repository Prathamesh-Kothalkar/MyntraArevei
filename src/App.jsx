import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './contactUs/contact'
import LoginSignUp from './loginSignUp/loginSignUP'
import Login from "./login/login";
import SignUp from "./signUp/signUp";
import CategoryPage from './pages/CategoryPage.jsx'


function App() {



  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/:category/:subcategory" element={<CategoryPage />} />
          <Route path="/loginSignup" element={<LoginSignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
