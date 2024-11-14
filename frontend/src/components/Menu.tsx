import React from "react";
import { slide as Menu } from "react-burger-menu";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const MenuComponent = () => {
  return (
    <Menu width={300}>
      <div>
        <style>
          {`
            .menu-item {
                color: #000;
                text-decoration: none;
                padding: 0 10px;
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgb(256, 256, 256) 50%);
                background-position: 0 0;
                background-size: 200% auto;
                transition: .3s;
            }
            .menu-item:hover {
                background-position: -100% 0;
                color: #000;
            }
          `}
        </style>
      </div>
        <br /><br /><br />
        <Link to="/" className="menu-item" >　<GroupsIcon /> For Tourist</Link>
        <br />
        <Link to="/Shop" className="menu-item" >　<BusinessIcon /> For Local Government</Link>
        <br />
        <Link to="/Delivery" className="menu-item" >　<LocalShippingIcon /> For Garbase Collector</Link>
    </Menu>
  );
};
export default MenuComponent;