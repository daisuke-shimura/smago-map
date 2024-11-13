import React from "react";
import { slide as Menu } from "react-burger-menu";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MenuComponent = () => {
  return (
    <Menu width={300}>
      <div>
        <style>
          {`
            .menu-box{
              margin: 10px;
            }
            .menu-item {
              color: black;
              text-decoration: none;
            }
            .menu-item:hover {
              color: #696969;
            }
          `}
        </style>
      </div>
        <br /><br /><br />
        <Link to="/" className="menu-item" >　<GroupsIcon /> Customer</Link>
        <br />
        <Link to="/Shop" className="menu-item" >　<StoreIcon /> Shop</Link>
        <br />
        <Link to="/Delivery" className="menu-item" >　<LocationOnIcon /> Delivery</Link>
    </Menu>
  );
};
export default MenuComponent;