import React from "react";
import UserLocationsMapBox from './user_locations_map_box';
import UserLocationsIndex from './user_locations_index';

class UserLocationsBox extends React.Component {


    render() {


        return (
            <section className="user-locations-box">
                <UserLocationsMapBox />
                <UserLocationsIndex />
            </section>
        )

    }

};

export default UserLocationsBox;