import React from "react";
import Filter from "./filter/filter";
import OnSale from "./on-sale/on-sale";
import NewListings from "./new-listings/new-listings";
import News from "./news/news";

import "./content.scss";

const Content = () => {
    return (
        <div className="content">
            <Filter/>
            <OnSale/>
            <NewListings/>
            <News/>
        </div>
    )
}

export default Content;
