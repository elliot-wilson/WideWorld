import React from "react";
import UserLocationsMap from './user_locations_map';

const UserLocationsMapBox = (props) => {


    return (
        <section className="user-locations-map-box">
            <ul>
                <li className="user-map-button">BEEN HERE</li>
                <li className="user-map-button">WANT GO</li>
                <li className="user-map-button">EDITED</li>
            </ul>
            <UserLocationsMap />
        </section>
    )

}

export default UserLocationsMapBox;