import { IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isPresentInFavorites } from "../config/logic.jsx";
import { addToFavorite } from "../State/Authentication/Action.js";


const RestaurantCard = () => {
  
  /*
  const handleNavigateToRestaurant=()=>{
    if(item.open){
        Navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`)
    }
  }
    */

  return (
    <Card className="w-[18rem]">
      <div
        className={`${
          true ? "cursor-pointer" : "cursor-not-allowed"
        } relative `}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oBl8oMj8unCKsHx9WuzVKgxc34HJnei-Qw&s"
          alt=""
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true?"success":"error"}
          label={true?"open":'closed'}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
              <p className="font-semibold text-lg cursor-pointer">Fast Food</p>
              <p className="text-gray-500 text-sm">
                   Craving it all? Dive into our global fla...
              </p>

        </div>
        <div>
            <IconButton>
                {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>
        </div>


      </div>
    </Card>
  );
};

export default RestaurantCard;
