import React from "react";
import { NavLink } from "react-router-dom";

const UserLocationsIndexItem = (props) => {

    const { location } = props;

    return (
        <li className="locations-index-item">
            <NavLink
                className="user-submedium-text"
                to={`/locations/${location.id}`}
            >
                <img src={location.photoURLs[0]}/>
                <p>{location.title}</p>
            </NavLink>
        </li>
    )

}

export default UserLocationsIndexItem;