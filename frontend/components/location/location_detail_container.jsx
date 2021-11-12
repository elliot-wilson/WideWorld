import React from "react";
import LocationMap from "./location_map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faExternalLinkAlt, faGlobe, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

class LocationDetailContainer extends React.Component {

    render() {
        const {location} = this.props;

        let officialWebsite;
        if (location.official_website) {
            officialWebsite = (
                <div className="loc-det-item">
                    <FontAwesomeIcon icon={faGlobe}/>
                    <p> Official Website:&nbsp;
                        <a
                            href={location.official_website}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {location.official_website}
                        </a>
                    </p>
                </div>
            )
        }

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
                {officialWebsite}
                <div className="loc-det-item">
                    <a
                        className="google-maps-link"
                        href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
                        target="_blank"
                        rel="noopener noreferrer">
                            View on Google Maps <FontAwesomeIcon icon={faExternalLinkAlt}/>
                    </a>
                </div>
            </div>
        )
    }

}

export default LocationDetailContainer;