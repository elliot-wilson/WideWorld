import React from "react";
import { Link } from "react-router-dom";

const FeaturedLocation = (props) => {

    const { location } = props;

    return (
        <Link to={`/locations/${location.id}`} className="featured-loc-box">
            <div className="featured-loc-text-container">
                <p className="featured-loc-title-text">{location.title}</p>
                <p className="featured-loc-summary-text">{location.summary}</p>
            </div>
            <img src={location.photoURLs[0]}/>
        </Link>
    )

};

export default FeaturedLocation;