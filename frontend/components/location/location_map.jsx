import React from "react";

class LocationMap extends React.Component {


    componentDidMount() {

        const { lat, lng } = this.props.location
        const mapOptions = {
            mapTypeControlOptions: { mapTypeIds: [] },
            streetViewControl: false,
            zoomControl: false,
            center: { lat, lng },
            zoom: 16
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions)
        this.marker = new google.maps.Marker({
            position: { lat, lng },
            map: this.map
        })
    }


    render () {


        return (
            <div className="loc-det-item" id="map-container" ref={ map => this.mapNode = map}>

            </div>
        )

    }

}

export default LocationMap;