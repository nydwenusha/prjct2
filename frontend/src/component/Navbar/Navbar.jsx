

import { Avatar, Box, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { grey, pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import "./Navbar.css";
import Person from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const Navbar = () => {
  /*
    const {auth}=useSelector(store=>store)
    const navigate=useNavigate()
    */
  // Using the useSelector hook to retrieve the auth state
  const auth = useSelector((store) => store.auth); // Ensure the structure is correct here
  const navigate = useNavigate();

  // Check for the possibility of undefined auth.user or its structure
  const userInitial = auth?.user?.fullName
    ? auth.user.fullName[0].toUpperCase()
    : "";

  const handleAvatarClick = () => {
    if (auth.user?.role === "ROLE_CUSTOMER") {
      navigate("/my-profile");
    } else {
      navigate("/admin/restaurant");
    }
  };

  return (
    <Box
      sx={{ zIndex: 100 }}
      className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#808588] lg:px-20 flex 
    justify-between"
    >
      <div
        className="lg:mr-10 cursor-pointer flex items-center
             space-x-4"
      >
        <li onClick={()=>navigate("/")} className="logo font-semibold text-gray-300 text-2xl">
          Online Food Ordering
        </li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div>
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div>
          {auth.user ? (
            <Avatar
              onClick={handleAvatarClick}
              sx={{ bgcolor: "white", color: pink }}
            >
              {auth.user?.fullName[0].toUpperCase()}
            </Avatar>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <Person />
            </IconButton>
          )}
        </div>

        <div>
          <IconButton>
            <Badge color="primary" badgeContent={3}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default Navbar;
