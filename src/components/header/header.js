import React from "react";
import MyAccount from "./profile/my-account";
import Menu from "./menu/menu";
import Language from "./language/language";

import "./header.scss";
import logo from "./../../assets/logo.svg"



const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-body">
                    <div className="block-with-logo">
                        <a href="#"><img src={logo} alt=""/></a>
                        <Language/>
                    </div>
                    <div>
                        <Menu/>
                    </div>
                    <div>
                        <MyAccount/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
