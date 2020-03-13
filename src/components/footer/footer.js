import React from "react";

import "./footer.scss";
import feedback from "./../../base/feedback.png";
import fb from "./../../base/facebook.png";
import yt from "./../../base/youtube.png";
import tw from "./../../base/tweeter.png";
import rd from "./../../base/reddit.png";
import awards from "./../../base/awards.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="feedback"><img src={feedback} alt=""/></div>
                <div className="social-network">
                    <a href="#" className="btn"><img src={fb} alt=""/></a>
                    <a href="#" className="btn"><img src={tw} alt=""/></a>
                    <a href="#" className="btn"><img src={yt} alt=""/></a>
                    <a href="#" className="btn"><img src={rd} alt=""/></a>
                </div>
                <div className="awards"><img src={awards} alt=""/></div>
            </div>
        </div>
    )
}

export default Footer;
