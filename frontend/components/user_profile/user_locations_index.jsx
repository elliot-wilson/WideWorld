import React from "react";
import UserLocationsIndexItem from './user_locations_index_item';

const UserLocationsIndex = (props) => {

    return (
        <ul className="locations-index">
            {
                props.locations.map(location => (
                    <UserLocationsIndexItem
                        key={`index-${location.id}`}
                        location={location}
                    />
                ))
            }
        </ul>
    )
};

export default UserLocationsIndex;