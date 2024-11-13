import React from "react";
import { slide as Menu } from "react-burger-menu";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default props => {
  return (
    <Menu>
      <div>
        <style>
          {`
            .menu-item {
              color: black;
              text-decoration: none;
            }
            .menu-item:hover {
              color: #696969;
              text-decoration: underline;
            }
          `}
        </style>
      </div>
      <br></br>
      <Link to="/" className="menu-item" ><GroupsIcon /> Customer</Link>
      <br></br>
      <Link to="/Shop" className="menu-item" ><StoreIcon /> Shop</Link>
      <br></br>
      <Link to="/Delivery" className="menu-item" ><LocationOnIcon /> Delivery</Link>
    </Menu>
  );
};