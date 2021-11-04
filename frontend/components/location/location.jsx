import React from "react";
import TagButtonsContainer from './tag_buttons_container';
import LocationDetailContainer from "./location_detail_container";
import EditorsDetailContainer from './editors_detail_container';

class Location extends React.Component {
    
    componentDidMount(){
        this.props.fetchLocation(this.props.match.params.locationId);
    }
    
    render() {
        const { location } = this.props;

        if (!location) return null;

        let additionalInfo;
        if (location.additional_info) {
            additionalInfo = (
                <div>
                    <h2>Know Before You Go</h2>
                    <div>{location.additional_info}</div>
                </div>
            )
        }

        return (
            <div className="location-container">
                <section className="location-headers">
                    <div className="location-title-container">
                        <div className="location-title">{location.title}</div>
                        <div className="location-summary">{location.summary}</div>
                    </div>
                    <TagButtonsContainer currLocation={location}/>
                </section>
                <section className="location-bodies">
                    <section className="location-text">
                        <div>{location.description}</div>
                        {additionalInfo}
                        <EditorsDetailContainer currLocation={location} />
                    </section>
                    <LocationDetailContainer location={location}/>
                </section>

            </div>
        )
    }

}

export default Location;