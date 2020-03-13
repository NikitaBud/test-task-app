import React from "react";

import "./news.scss";
import news from "./../../../base/news-logo.png";
import pngNews from "./../../../base/factory.png";
import pngNews1 from "../../../base/news1.png";
import pngNews2 from "./../../../base/news2.png";

const News = () => {
    return (
        <div className="news-block">
            <h2>News</h2>
            <div className="news-container">
                <div className="news-items">
                    <img src={news} alt=""/>
                </div>
                <div className="news-items">
                    <img src={pngNews1} alt=""/>
                </div>
                <div className="news-items">
                    <img src={pngNews2} alt=""/>
                </div>
                <div className="news-items">
                    <img src={pngNews} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default News;
