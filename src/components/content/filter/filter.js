import React from "react";

import "./filter.scss";

const Filter = () => {
    return (
        <div>
            <h2>Filter</h2>
            <ul className="filter-items">
                <li className="filter-item">
                    <button className="btn btn-filter" type="button">By Algorithm</button>
                </li>
                <li className="filter-item">
                    <button className="btn btn-filter" type="button">By Coin</button>
                </li>
                <li className="filter-item">
                    <button className="btn btn-filter" type="button">By Equipment</button>
                </li>
                <li className="filter-item">
                    <button className="btn btn-filter" type="button">By Manufacturer</button>
                </li>
                <li className="filter-item">
                    <button className="btn btn-filter" type="button">Minimum price</button>
                </li>
                <li className="filter-item">
                    <button className="btn btn-filter" type="button">Maximum price</button>
                </li>
                <li className="filter-item">
                    <button className="btn btn-filter" type="button">Search</button>
                </li>
            </ul>
        </div>
    )
}

export default Filter;
