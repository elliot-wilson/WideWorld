import React from "react";
import UserLocationsMap from './user_locations_map';

const UserLocationsMapBox = (props) => {

    console.log("UserLocationsMapBox")

    return (
        <section className="user-locations-map-box">
            <ul>
                <li className="user-map-button">BEEN HERE</li>
                <li className="user-map-button">WANT GO</li>
                <li className="user-map-button">EDITED</li>
            </ul>
            <UserLocationsMap
                locationVisits={props.locationVisits}
            />
        </section>
    )

}

export default UserLocationsMapBox;