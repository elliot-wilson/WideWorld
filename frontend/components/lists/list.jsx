import React from "react";
import { Link } from 'react-router-dom';
import UserLocationsIndex from "../user_profile/user_locations_index";
import UserLocationsMap from "../user_profile/user_locations_map";

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchList(this.props.match.params.listId)
    }

    componentDidUpdate() {
        if (!this.props.list) {
            this.props.fetchList(this.props.match.params.listId)
        }
    }


    render() {

        const { list,
                author,
                locations } = this.props;

        if (!list || !author) return (<div className="placeholder"></div>)

        return (
            <div className="list-positioner">
                <div className="user-location-list">
                    <h2 className="subheading">{list.title}</h2>
                    <h3>by <Link to={`/users/${author.id}`}>{author.username}</Link></h3>
                    <UserLocationsMap
                        user={author}
                        locations={locations}
                    />
                    <UserLocationsIndex
                        locations={locations}
                    />
                </div>
            </div>
        )
    }
}

export default List;