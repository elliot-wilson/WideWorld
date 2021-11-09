import React from "react";
import SubordinateLocationsMainItem from './subordinate_locations_main_item';
import SubordinateLocationsListItem from './subordinate_locations_list_item';

const SubordinateLocationsBox = (props) => {

    const { locations } = props;

    const mainLocs = locations.slice(0, 2);
    const listLocs = locations.slice(2);

    return (
            <div className="subordinate-locations-box">
                <ul className="sub-loc-main-items-index">
                    {
                        mainLocs.map((location, idx) => (
                            <SubordinateLocationsMainItem
                                key={idx}
                                location={location}
                            />
                        ))
                    }
                </ul>
                <ul className="sub-loc-list-items-index">
                    {
                        listLocs.map((location, idx) => (
                            <SubordinateLocationsListItem
                                key={idx}
                                location={location}
                            />
                        ))
                    }
                </ul>
            </div>
    )
};

export default SubordinateLocationsBox;