import React from "react";

import "./my-account.scss";
import account from "./../../../assets/account.svg";
import wallet from "./../../../assets/balance.svg";
import bell from "./../../../assets/bell.svg";
import cart from "./../../../assets/cart.svg";

const MyAccount = () => {
    return (
        <div className="my-account-block">
            <div>
                <img src={account} alt=""/>
                <b>My account</b>
            </div>
            <div>
                <img src={wallet} alt=""/>
                <span>Wallet</span>
            </div>
            <div>
                <img src={bell} alt=""/>
                <span>Notification</span>
            </div>
            <div>
                <img src={cart} alt=""/>
                <span>Basket</span>
            </div>
        </div>
    )
}

export default MyAccount;
