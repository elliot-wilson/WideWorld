import React from "react";

const UserLocationsIndexItem = (props) => {


    return (
        <li className="user-locations-index-item">
            <p className="user-submedium-text">{props.location.title}</p>
        </li>
    )

}

export default UserLocationsIndexItem;