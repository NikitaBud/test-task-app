import React, {useEffect, useState} from "react";

import "./menu.scss";

const Menu = () => {

    const [active] = useState(false);

    return (
        <div className="menu-container">
            <div className="header-burger">
                <span>menu</span>
            </div>
            <nav className="header-menu">
                <ul className="header-list">
                    <li>
                        <a href="#" className="header-link">Home</a>
                    </li>
                    <li>
                        <a href="#" className="header-link">Sell</a>
                    </li>
                    <li>
                        <a href="#" className="header-link">Host</a>
                    </li>
                    <li>
                        <a href="#" className="header-link">About us</a>
                    </li>
                    <li>
                        <a href="#" className="header-link">Support</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;
