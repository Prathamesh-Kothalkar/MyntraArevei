import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const DrawerComponent = ({ drawerOpen, toggleDrawer, menuItems }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <div
        className="w-64 h-full bg-gray-100"
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className="p-4 bg-white shadow-md">
          
        </div>
        <List className="flex flex-col gap-2">
          {/* Main Categories */}
          {["Men", "Women", "Kids", "Beauty"].map((category) => (
            <ListItem
              button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`hover:bg-gray-200 ${
                selectedCategory === category ? "bg-gray-200" : ""
              }`}
            >
              <ListItemText
                primary={category}
                className="text-lg font-semibold text-gray-800"
              />
            </ListItem>
          ))}

          {/* Subcategories */}
          {selectedCategory &&
            Object.keys(menuItems[selectedCategory]).map((subcategory) => (
              <div key={subcategory} className="pl-4 mt-2">
                <ListItemText
                  primary={subcategory}
                  className="pl-2 font-bold text-sm text-gray-600"
                />
                <div className="pl-4">
                  {menuItems[selectedCategory][subcategory].map((subItem) => (
                    <ListItem
                      button
                      key={subItem.path}
                      onClick={() => toggleDrawer(false)}
                      className="hover:bg-gray-100"
                    >
                      <Link
                        to={`/${selectedCategory.toLowerCase()}/${subcategory
                          .toLowerCase()
                          .replace(/\s+/g, "-")}/${subItem.path}`}
                        className="text-sm text-gray-700"
                      >
                        <ListItemText primary={subItem.name} />
                      </Link>
                    </ListItem>
                  ))}
                </div>
              </div>
            ))}

          {/* Login/Signup */}
          <ListItem button className="hover:bg-gray-200 mt-4">
            <Link
              to="/login"
              onClick={() => toggleDrawer(false)}
              className="text-lg font-semibold text-gray-800"
            >
              <ListItemText primary="Login/Signup" />
            </Link>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
