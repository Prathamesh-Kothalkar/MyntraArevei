import { Link } from "react-router-dom";
import React from 'react';
import astore from "../../assets/astore.png"
import gplay from "../../assets/gplay.png"
import { Facebook, Instagram, ResetTvRounded, TripOriginSharp, Twitter, YouTube } from '@mui/icons-material';
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        
        <div>
          <h5 className="text-gray-800 font-semibold mb-4">ONLINE SHOPPING</h5>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Men</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Women</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Kids</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Home & Living</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Beauty</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Gift Cards</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Myntra Insider</a></li>
          </ul>
        </div>

        
        <div>
          <h5 className="text-gray-800 font-semibold mb-4">CUSTOMER POLICIES</h5>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900"><Link to="/contact">Contact Us</Link></a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900"><Link to="/contact">FAQ</Link></a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900"><Link to="/contact">T&C</Link></a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Terms Of Use</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900"><Link to="/contact">Track Orders</Link></a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Shipping</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Cancellation</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Returns</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Grievance Officer</a></li>
          </ul>
        </div>

        
        <div>
          <h5 className="text-gray-800 font-semibold mb-4">EXPERIENCE MYNTRA APP ON MOBILE</h5>
          <div className="flex space-x-2">
            <img src={gplay} alt="Google Play" className="w-24" />
            <img src={astore} alt="App Store" className="w-24" />
          </div>
          <div>
          <h5 className="text-gray-800 font-semibold mb-4">KEEP IN TOUCH</h5>
          <div className="flex space-x-4">
            <a href="#"><Facebook/></a>
            <a href="#"><Twitter/></a>
            <a href="#"><YouTube/></a>
            <a href="#"><Instagram/></a>
          </div>
        </div>
        </div>
        <div className="text-sm">
            <div className="flex">
                <div className="">
                    <TripOriginSharp/>
                </div>
                <div className="mx-2">
                    <span className='font-bold'>100% ORIGINAL </span>guarantee for all products at myntra.com      
                </div>
            </div>
            <div className="flex">
                <div className="">
                    <ResetTvRounded/>
                </div>
                <div className="mx-2">
                    <span className='font-bold'>Return within 14 days </span>of receiving your order      
                </div>
            </div>
        </div>
       
       
      </div>

      <div className="max-w-6xl mx-auto mt-8">
        <h5 className="text-gray-800 font-semibold mb-4">POPULAR SEARCHES</h5>
        <p className="text-gray-600">
          Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
        </p>
      </div>
    </footer>
  );
}

export default Footer;
