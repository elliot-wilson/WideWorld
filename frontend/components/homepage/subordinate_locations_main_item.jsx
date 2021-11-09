import React from "react";
import { Link } from "react-router-dom";

const SubordinateLocationsMainItem = (props) => {

    const { location } = props

    return (
        <Link to={`/locations/${location.id}`} className="sub-loc-main-item">
            <img src={location.photoURLs[0]}/>
            <div className="sub-loc-main-text-container">
                <p className="sub-loc-main-title-text">{location.title}</p>
                <p className="sub-loc-main-summary-text">{location.summary}</p>
            </div>
        </Link>
    )

};

export default SubordinateLocationsMainItem;