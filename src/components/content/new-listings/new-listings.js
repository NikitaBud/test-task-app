import React from "react";

import "./new-listings.scss";
import img1 from "../../../base/14.png";
import img2 from "../../../base/3.png";

const NewListings = () => {
    return (
        <div className="new-listings-container">
            <h2>New Listings</h2>
            <div className="listings-items-block">
                <ul className="new-listings-items">
                    <li className="new-listings-item">
                        <div className="new-listings-item-container">
                            <h3>USED Antminer<br/> S9 10.5-14.5 th/s</h3>
                            <img src={img1} alt=""/>
                            <div>
                                <p>$137.00 - $217.00</p>
                                <b>PSU</b>
                            </div>
                        </div>
                    </li>
                    <li className="new-listings-item">
                        <div className="new-listings-item-container">
                            <h3>USED Antminer<br/> S9 10.5-14.5 th/s</h3>
                            <img src={img1} alt=""/>
                            <div>
                                <p>$137.00 - $217.00</p>
                                <b>PSU</b>
                            </div>
                        </div>
                    </li>
                    <li className="new-listings-item">
                        <div className="new-listings-item-container">
                            <h3>Antminer DR5 <br/> S35 Th/s</h3>
                            <img src={img2} alt=""/>
                            <div>
                                <p>$1385.00</p>
                                <b>PSU</b>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NewListings;
