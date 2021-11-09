import React from "react";
import { Link } from "react-router-dom";

const SubordinateLocationsListItem = (props) => {

    const { location } = props;

    return (
        <li className="sub-loc-list-item">
            <Link to={`/locations/${location.id}`}><p className="sub-loc-list-item-text">{location.title}</p></Link>
        </li>
    )

};

export default SubordinateLocationsListItem;