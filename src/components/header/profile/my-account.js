import React from "react";

import "./my-account.scss";
import account from "./../../../assets/account.svg";
import wallet from "./../../../assets/balance.svg";
import bell from "./../../../assets/bell.svg";
import cart from "./../../../assets/cart.svg";
import item from "./../../../base/15.png";
import del from "./../../../base/delete.svg";

const MyAccount = () => {
    return (
        <div className="my-account-menu">
            <ul className="user-menu">
                <li className="user-menu-item">
                    <img src={account} alt=""/>
                    <b>My account</b>
                </li>
                <li>
                    <img src={wallet} alt=""/>
                    <span>Wallet</span>
                </li>
                <li>
                    <img src={bell} alt=""/>
                    <span>Notification</span>
                </li>
                <li>
                    <img src={cart} alt=""/>
                    <span>Basket</span>
                    <ul className="sub-user-menu">
                        <li>
                            <h3>You have 3 items in your cart</h3>
                        </li>
                        <li>
                            <ul className="product-items-menu">
                                <li>
                                    <button className="btn-card">
                                        <img className="item-img" src={item} alt=""/>
                                        <img className="delete" src={del}/>
                                    </button>
                                        <p>Innosilicon A6 1.23 GH/s</p>
                                        <div className="item-price-block">
                                            <span>1 </span>
                                            <b>$3240.00 </b>
                                        </div>
                                </li>
                                <li>
                                    <button className="btn-card">
                                        <img className="item-img" src={item} alt=""/>
                                        <img className="delete" src={del}/>
                                    </button>
                                    <p>Innosilicon A6 1.23 GH/s</p>
                                    <div>
                                        <span>1</span>
                                        <b>$3240.00 </b>
                                    </div>
                                </li>
                                <li>
                                    <button className="btn-card">
                                        <img className="item-img" src={item} alt=""/>
                                        <img className="delete" src={del}/>
                                    </button>
                                    <p>Innosilicon A6 1.23 GH/s</p>
                                    <div>
                                        <span>1</span>
                                        <b>$3240.00 </b>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="btn-block">
                                <button className="btn btn-sub-user-menu">Continue</button>
                                <button className="btn btn-sub-user-menu">Remove all</button>
                            </div>
                            <span>$$$</span>
                            <ul className="sub-sub-billing-menu">
                                <li>
                                    <p>Enter your Billing details</p>
                                    <input type="checkbox"/>
                                </li>
                                <li>
                                    <ul className="sub-sub-sub">
                                        <li>
                                            <input type="text" placeholder="First name"/>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="Last name*"/>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="Company Name (Optional)"/>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="Country*"/>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="House number and street name*"/>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="Apartment, suit, unit etc(optional)"/>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="Town/City*"/>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="State*"/>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="Zip*"/>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="Phone*"/>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="Email address*"/>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="Create account password*"/>
                                        </li>
                                    </ul>
                                </li>
                                <li></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default MyAccount;
