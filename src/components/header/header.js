import React from "react";
import MyAccount from "./profile/my-account";
import Menu from "./menu/menu";
import Language from "./language/language";

import "./header.scss";
import logo from "./../../assets/logo.svg"



const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="block-with-logo">
                <img src={logo} alt=""/>
                <Language />
            </div>
            <div>
                <Menu />
            </div>
            <div>
                <MyAccount />
            </div>

        </div>
    )
}

export default Header;
