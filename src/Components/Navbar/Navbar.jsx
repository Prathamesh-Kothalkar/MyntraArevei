import React, { useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  FavoriteBorder,
  ShoppingBag,
  Menu,
  Login,
  Logout,
  AddBox,
} from "@mui/icons-material";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

import {
  Badge,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";


import logo from "../../assets/newlogo.jpeg";
import gplay from "../../assets/gplay.png";
import menuItems from "../../assets/menuItems";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { UserContext } from "../../Context/UserContext";



const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchProduct,setSearchProduct] = useState('');
  const { isLogin, setIsLogin } = useContext(UserContext)
  const colors = {
    Men: "text-blue-500 border-blue-500",
    Women: "text-pink-500 border-pink-500",
    Kids: "text-orange-500 border-orange-500",
    Beauty: "text-green-500 border-green-500",
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navigate = useNavigate();
  const handleSearch = (e)=>{
    e.preventDefault();
    navigate(`/search?q=${searchProduct.trimStart()}`)
  }
  return (
    <nav className="bg-white text-black shadow-md fixed top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex items-center justify-between px-2 md:px-8 py-3">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton onClick={toggleDrawer(true)}>
            <Menu />
          </IconButton>
        </div>
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="object-fit h-10" />
        </Link>
        {/* Desktop Menu */}

        <div className="hidden md:flex  text-sm px-7">
          {Object.keys(menuItems).map((mainCategory) => (
            <div
              key={mainCategory}
              onMouseEnter={() => {
                setIsHovering(true);
                setHoveredItem(mainCategory);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                setHoveredItem(null);
              }}
              className="relative"
            >
              <Link
                to={`/${mainCategory.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-4 text-sm font-semibold ${hoveredItem === mainCategory ? colors[mainCategory] : ""
                  }`}
              >
                {mainCategory}
              </Link>
              {isHovering && hoveredItem === mainCategory && (
                <Transition
                  show={isHovering}
                  enter="transition-opacity duration-150"
                  
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="absolute left-0 top-[50px] w-[70vw] bg-white shadow-lg rounded-lg border-t border-gray-200"
                >
                  <div className="grid grid-cols-4 gap-6 p-6">
                    {Object.keys(menuItems[mainCategory]).map((subcategory) => (
                      <div key={subcategory} className="space-y-4">
                        <h3 className={colors[mainCategory]}>{subcategory}</h3>
                        {menuItems[mainCategory][subcategory].length > 0 ? (
                          menuItems[mainCategory][subcategory].map((item) => (
                            <Link
                              key={item.path}
                              to={`/${mainCategory
                                .toLowerCase()
                                .replace(/\s+/g, "-")}/${subcategory
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}/${item.path}`}
                              className="block text-grey-700  hover:font-semibold"
                            >
                              {item.name}
                            </Link>
                          ))
                        ) : (
                          <p className="text-gray-500">No items available</p>
                        )}
                      </div>
                    ))}
                  </div>
                </Transition>
              )}
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <form className="hidden md:flex flex-1 items-center bg-gray-200 rounded-md p-2 mx-8">
          <button type="submit" disabled={searchProduct===""} onClick={handleSearch}><Search className="text-gray-600"  /></button>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="ml-2 bg-transparent outline-none flex-grow"
            onChange={(e)=>setSearchProduct(e.target.value)}
            value={searchProduct}
          />
        </form>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex">
            {
              !isLogin ?
                <Link to="/login">
                  <Login color="success" />
                </Link>
                :
                <Link onClick={() => { localStorage.clear(); setIsLogin(false) }} to="/login">
                  <Logout color="error" />
                </Link>
            }
          </div>

          <div className="flex md:hidden">
            <Search />
          </div>

          <IconButton onClick={() => { navigate("/user") }}>
              {/* <FavoriteBorder /> */}
              <AccountCircleTwoToneIcon></AccountCircleTwoToneIcon>
          </IconButton>
          <IconButton onClick={()=>navigate('/addProduct')}>
              <AddBox />
          </IconButton>
          <IconButton onClick={() => { navigate("/cart") }}>
            <Badge badgeContent={2} color="secondary">
              <ShoppingBag />
            </Badge>
          </IconButton>
        </div>
      </div>

      {/* Drawer for Mobile Menu */}
      <DrawerComponent
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        menuItems={menuItems}
      />
    </nav>
  );
};

export default Navbar;
