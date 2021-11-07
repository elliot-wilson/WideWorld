import React from "react";
import UserLocationsMap from './user_locations_map';

class Headers extends React.Component {

    render() {

        const selected = this.props.selectedHeaderIdx

        const headers = this.props.headers.map((header, idx) => {
            const title = header.title;
            const klass = idx === selected ? 'active' : '';

            return (
                <li
                    key={idx}
                    className={`user-map-button ${klass}`}
                    onClick={() => this.props.updateLocationSelection(header.selector)}
                >
                    {title}
                </li>
            )
        })


        return (
            <ul className="headers">
                {headers}
            </ul>
        )
    }

}

const UserLocationsMapBox = (props) => {

    const headers = [
        { title: "BEEN HERE", selector: "locationVisits" },
        { title: "WANT TO GO", selector: "locationWannaVisits"},
        { title: "ADDED", selector: "locationAdds" },
        { title: "EDITED", selector: "locationEdits"}
    ]

    return (
        <section className="user-locations-map-box">
            <Headers
                headers={headers}
                updateLocationSelection={props.updateLocationSelection}
                selectedHeaderIdx={props.selectedHeaderIdx}
            />
            <UserLocationsMap
                locations={props.locations}
            />
        </section>
    )

}

export default UserLocationsMapBox;