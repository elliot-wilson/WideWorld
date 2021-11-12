import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {


    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="not-found-container">
                <div className="not-found-text">
                    <p className="title">You must like exploring unusual places!</p>
                    <p className="user-submedium-text">
                        Us too, but we try to stay on the map. How about viewing a <Link to="/locations/random">random place</Link> instead?
                    </p>
                </div>
            </div>
        )
    }

};

export default NotFound;