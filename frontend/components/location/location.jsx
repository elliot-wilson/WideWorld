import React from "react";

class Location extends React.Component {
    
    componentDidMount(){
        this.props.fetchLocation(this.props.match.params.locationId);
    }
    
    render() {
        return (
            <div className="article-container">
                <section className="article-headers">TITLE, etc.!!!</section>
                <section className="article-bodies">BODY, etc.!!!</section>
            </div>
        )
    }

}

export default Location;