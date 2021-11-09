import React from "react";
import { NavLink } from "react-router-dom";

const UserLocationsIndexItem = (props) => {

    const { location } = props;
    return (
        <li className="user-locations-index-item">
            <NavLink
                className="user-submedium-text"
                to={`/locations/${location.id}`}
            >
                    {location.title}
            </NavLink>
        </li>
    )

}

export default UserLocationsIndexItem;