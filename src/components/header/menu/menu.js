import React from "react";

import "./menu.scss";
import menu from "./../../../assets/hamburger.svg"

const Menu = () => {
    return (
        <div className="menu">
            <img src={menu} alt=""/>
            <span>Menu</span>
        </div>
    )
}

export default Menu;
