import React from "react";

class UserLocationsMap extends React.Component {

    constructor(props) {
        super(props)

        this.markers = [];

    }

    componentDidMount() {
        this.renderMap();
        this.addMarkers();  
    }

    
    componentDidUpdate() {
        if (this.props.user) {
            this.clearMarkers();
            this.renderMap();
            this.addMarkers();  
        }
    }

    renderMap() {
        const mapOptions = {
            mapTypeControlOptions: { mapTypeIds: [] },
            streetViewControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT,
            },
            center: { lat: 21.543729, lng: 176.0355309 },
            zoom: 2
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions)
    }

    clearMarkers() {
        if (this.markers.length > 0) {
            for (let i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
            }
            this.markers = [];
        }
    }

    addMarkers() {
        let { locations } = this.props

        if (!locations) return null;

        if (locations.length > 0) {
            let bounds = new google.maps.LatLngBounds();
            for (let i = 0; i < locations.length; i++) {
                let { lat, lng } = locations[i];
                let marker = new google.maps.Marker({
                    position: { lat, lng },
                    map: this.map
                });
                this.markers.push(marker);
                bounds.extend(marker.position);
            }

            this.map.fitBounds(bounds);
        }
    }
    
    render() {


        return (
            <div
                className="user-location-map"
                id="user-location-map-container"
                ref={ map => this.mapNode = map}
            >
    
            </div>
        )
            
    }

};

export default UserLocationsMap;