import React from "react";

import "./language.scss";
import earth from "./../../../assets/Vector.svg"

const Language = () => {
    return (
        <div className="language-block">
            <img src={earth} alt=""/>
            <span>ENG</span>
        </div>
    )
}

export default Language;
