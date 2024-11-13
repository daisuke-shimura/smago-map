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
        <Link to="/" className="menu-item" >　<GroupsIcon /> For Tourist</Link>
        <br />
        <Link to="/Shop" className="menu-item" >　<BusinessIcon /> For Local Government</Link>
        <br />
        <Link to="/Delivery" className="menu-item" >　<LocalShippingIcon /> For Garbase Collector</Link>
    </Menu>
  );
};
export default MenuComponent;