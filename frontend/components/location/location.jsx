import React from "react";

class Location extends React.Component {
    
    componentDidMount(){
        this.props.fetchLocation(this.props.match.params.locationId);
    }
    
    render() {
        const { location } = this.props;

        if (!location) return null;

        return (
            <div className="location-container">
                <section className="location-headers">
                    <div className="location-title-container">
                        <div className="location-title">{location.title}</div>
                    </div>
                    <div className="tag-buttons">

                    </div>
                </section>
                <section className="article-bodies">BODY, etc.!!!</section>
            </div>
        )
    }

}

export default Location;