import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  Search,
  AccountCircle,
  FavoriteBorder,
  ShoppingBag,
  Menu,
} from "@mui/icons-material";
import {
  Badge,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import logo from "../../assets/clogo.jpeg";
import gplay from "../../assets/gplay.png";
import menuItems from "../../assets/menuItems";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const colors = {
    Men: "text-blue-500 border-blue-500",
    Women: "text-pink-500 border-pink-500",
    Kids: "text-yellow-500 border-yellow-500",
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

  return (
    <nav className="bg-white text-black shadow-md fixed top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton onClick={toggleDrawer(true)}>
            <Menu />
          </IconButton>
        </div>
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="object-fit h-9 w-9" />
        </Link>
        {/* Desktop Menu */}

        <div className="hidden md:flex space-x-8 text-sm">
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
                className={`px-4 text-lg font-semibold ${
                  hoveredItem === mainCategory ? colors[mainCategory] : ""
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
                  className="absolute left-0 top-full w-[70vw] bg-white shadow-lg rounded-lg border-t border-gray-200"
                >
                  <div className="grid grid-cols-4 gap-6 p-6">
                    {Object.keys(menuItems[mainCategory]).map((subcategory) => (
                      <div key={subcategory} className="space-y-4">
                        <h3 className="font-bold">{subcategory}</h3>
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
        <div className="hidden md:flex flex-1 items-center bg-gray-200 rounded-md p-2 mx-8">
          <Search className="text-gray-600" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="ml-2 bg-transparent outline-none flex-grow"
          />
        </div>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex">
            <Link to="/loginSignUp">
              <AccountCircle />
            </Link>
          </div>

          <div className="flex md:hidden">
            <Search />
          </div>

          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <FavoriteBorder />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingBag />
            </Badge>
          </IconButton>
        </div>
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          className="w-64"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="p-2">
            <img
              src={gplay}
              alt="Logo"
              className="w-full h-auto object-fill mt-1 mb-1"
            />
          </div>
          <List>
            {Object.keys(menuItems).map((category) => (
              <div key={category}>
                <ListItem button>
                  <Link
                    to={`/${category.toLowerCase()}`}
                    onClick={() => toggleDrawer(false)}
                  >
                    <ListItemText primary={category} />
                  </Link>
                </ListItem>
                {Object.keys(menuItems[category]).map((subcategory) => (
                  <div key={subcategory}>
                    <ListItemText
                      primary={subcategory}
                      className="pl-6 font-bold"
                    />
                    {menuItems[category][subcategory].map((subItem) => (
                      <ListItem
                        button
                        key={subItem.path}
                        onClick={() => toggleDrawer(false)}
                        className="pl-10"
                      >
                        <Link
                          to={`/${category.toLowerCase()}/${subcategory
                            .toLowerCase()
                            .replace(/\s+/g, "-")}/${subItem.path}`}
                        >
                          <ListItemText primary={subItem.name} />
                        </Link>
                      </ListItem>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            <ListItem button>
              <Link to="/loginSignUp" onClick={() => toggleDrawer(false)}>
                <ListItemText primary="Login/Signup" />
              </Link>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
