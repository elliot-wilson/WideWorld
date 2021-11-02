import React from "react";
import LocationMap from "./location_map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

class LocationDetailContainer extends React.Component {

    render() {
        const {location} = this.props
        return (
            <div className="location-details-container">
                <LocationMap location={location} />
                <div className="loc-det-item">
                    <FontAwesomeIcon icon={faLocationArrow}/>
                    <p>Address: {location.address}</p>
                </div>
                <div className="loc-det-item">
                    <FontAwesomeIcon icon={faCompass}/>
                    <p>Coordinates: {location.lat}, {location.lng}</p>
                </div>
                <div className="loc-det-item"><a>View on Google Maps</a></div>
            </div>
        )
    }

}

export default LocationDetailContainer;