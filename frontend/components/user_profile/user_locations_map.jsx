import React from "react";

class UserLocationsMap extends React.Component {

    componentDidUpdate() {

        console.log("UserLocationsMap");
        console.log(this.props);

        let locations = this.props.locationVisits;

        console.log(locations)

        const mapOptions = {
            mapTypeControlOptions: { mapTypeIds: [] },
            streetViewControl: false,
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions)

        let bounds = new google.maps.LatLngBounds();
        let infowindow = new google.maps.InfoWindow();

        for (let i = 0; i < locations.length; i++) {
            let { lat, lng } = locations[i];
            let marker = new google.maps.Marker({
                position: { lat, lng },
                map: this.map
            });
            bounds.extend(marker.position);

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }

        this.map.fitBounds(bounds);

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