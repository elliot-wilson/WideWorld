import React from "react";
import TagButtonsContainer from './tag_buttons_container';
import LocationDetailContainer from "./location_detail_container";
import EditorsDetailContainer from './editors_detail_container';
import PhotoContainer from "./photocontainer";

class Location extends React.Component {
    
    componentDidMount(){
        window.scrollTo(0,0);

        if (!this.props.isRandom) {
            this.props.fetchLocation(this.props.match.params.locationId);
        }
    }
    
    componentDidUpdate() {
        let { location } = this.props;
        
        if (!location) {
            this.props.fetchLocation(this.props.match.params.locationId);
        }
    }

    render() {
        const { location, locations } = this.props;

        if (!location || locations.length > 1) return (<div className="placeholder"></div>);

        let additionalInfo;
        if (location.additional_info && location.additional_info !== "null") {
            additionalInfo = (
                <div className="addl-info-container">
                    <h2 className="addl-info-header">Know Before You Go</h2>
                    <div>{location.additional_info}</div>
                </div>
            )
        }

        return (
            <div className="location-container">
                <section className="location-topline">
                    <section className="location-headers">
                        <div className="location-title-container">
                            <div className="title">{location.title}</div>
                            <div className="location-summary">{location.summary}</div>
                        </div>
                        <TagButtonsContainer currLocation={location}/>
                    </section>
                    <PhotoContainer photos={location.photoURLs} />
                </section>
                <section className="location-bodies">
                    <section className="location-text">
                            <div className="location-description">{location.description}</div>
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