import React from "react";
import UserLocationsIndexItem from './user_locations_index_item';

const UserLocationsIndex = (props) => {

    let emptyMessage;
    if (props.locations.length === 0) {
        emptyMessage = (
            <div className="empty-message sub-subheading">Looks like this list is empty!</div>
        )
    }

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
            {emptyMessage}
        </ul>
    )
};

export default UserLocationsIndex;