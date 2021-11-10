import React from "react";
import FeaturedLocation from "./featured_location";
import SubordinateLocationsBox from "./subordinate_locations_box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

class SplashLocationsBox extends React.Component {
    
    componentDidMount() {
        this.props.fetchRandomLocations();
    }

    render() {

        const { locations } = this.props;

        if (locations.length < 8) return (<div className="placeholder"></div>);

        const featuredLoc = locations[0];
        const subLocs = locations.slice(1);

        return (
            <div className="splash-locations-box">
                <FeaturedLocation location={featuredLoc} />
                <SubordinateLocationsBox locations={subLocs} />
                <Link to="/locations/new"className="homepage-add-button green-button">
                    <FontAwesomeIcon icon={faMapMarkedAlt}/><p>ADD A LOCATION TO OUR MAP</p>
                </Link>
            </div>
        )
    }
};

export default SplashLocationsBox;