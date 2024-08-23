import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Search, AccountCircle, FavoriteBorder, ShoppingBag, Menu } from '@mui/icons-material';
import { Badge, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import logo from "../../assets/clogo.jpeg";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <nav className="bg-white text-black text-sm shadow-sm shadow-slate-300 md:p-2 top-0 right-0 left-0 fixed z-20">
            <div className="container mx-auto flex items-center justify-between">
                <div className="p-2 flex justify-between">
                    
                    <div className="md:hidden">
                        <IconButton onClick={toggleDrawer(true)}>
                            <Menu />
                        </IconButton>
                    </div>

                    <Link to="/loginSignUp"><img src={logo} alt="Logo" className='object-fit h-9 w-9' /></Link>
                </div>



               
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <div
                        className="w-64"
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Studio'].map((text) => (
                                <ListItem button key={text}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>

               
                <div className="hidden md:flex space-x-8 text-sm">
                    <span className="cursor-pointer font-medium">MEN</span>
                    <span className="cursor-pointer font-medium">WOMEN</span>
                    <span className="cursor-pointer font-medium">KIDS</span>
                    <span className="cursor-pointer font-medium">HOME & LIVING</span>
                    <span className="cursor-pointer font-medium">BEAUTY</span>
                    <span className="cursor-pointer font-medium text-pink-500">
                        STUDIO <sup>NEW</sup>
                    </span>
                </div>

               
                <div className="hidden md:flex flex-1 items-center bg-gray-200 rounded-md p-2 mx-8">
                    <Search className="text-gray-600" />
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        className="ml-2 bg-transparent outline-none flex-grow"
                    />
                </div>

                
                <div className="flex items-center space-x-6">
                    <div className="hidden md:flex">
                    <Link to="/loginSignUp"><AccountCircle /></Link>
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
        </nav>
    );
};

export default Navbar;
