import React from "react";

import "./on-sale.scss";
import img1 from "./../../../base/14.png";
import img2 from "./../../../base/3.png";
import img3 from "./../../../base/4.png";
import img4 from "./../../../base/7.png";
import img5 from "./../../../base/8.png";

const OnSale = () => {
    return (
        <div>
            <h2>On sale</h2>
            <ul className="catalog-items">
                <li className="catalog-item">
                    <div className="catalog-item-container">
                        <h3>USED Antminer<br/> S9 10.5-14.5 th/s</h3>
                        <img src={img1} alt=""/>
                        <div>
                            <p>$137.00 - $217.00</p>
                            <b>PSU</b>
                        </div>
                    </div>
                </li>
                <li className="catalog-item">
                    <div className="catalog-item-container">
                        <h3>USED Antminer<br/> S9 10.5-14.5 th/s</h3>
                        <img src={img1} alt=""/>
                        <div>
                            <p>$137.00 - $217.00</p>
                            <b>PSU</b>
                        </div>
                    </div>
                </li>
                <li className="catalog-item">
                    <div className="catalog-item-container">
                        <h3>Antminer DR5 <br/> S35 Th/s</h3>
                        <img src={img2} alt=""/>
                        <div>
                            <p>$1385.00</p>
                            <b>PSU</b>
                        </div>
                    </div>
                </li>
                <li className="catalog-item">
                    <div className="catalog-item-container">
                        <h3>AGPU Enclosure <br/>12 cards</h3>
                        <img src={img3} alt=""/>
                        <div>
                            <p>$650.00</p>
                            <b>PSU</b>
                        </div>
                    </div>
                </li>
                <li className="catalog-item">
                    <div className="catalog-item-container">
                        <h3>PandaMiner B3 Pro 4g <br/>230 Mh/s</h3>
                        <img src={img4} alt=""/>
                        <div>
                            <p>$2209.00<del>$2352.00</del></p>
                            <b>PSU</b>
                        </div>
                    </div>
                </li>
                <li className="catalog-item">
                    <div className="catalog-item-container">
                        <h3>Innosilicon A6<br/>  1.23 GH/s</h3>
                        <img src={img5} alt=""/>
                        <div>
                            <p>$3240.00<del>$3450.00</del></p>
                            <b>PSU</b>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default OnSale;
