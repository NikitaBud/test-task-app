import React from "react";
import MyAccount from "./profile/my-account";
import Menu from "./menu/menu";
import Language from "./language/language";

const Header = () => {
    return (
        <div>
            <div>
                <img src="" alt=""/>
            </div>
            <div>
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
