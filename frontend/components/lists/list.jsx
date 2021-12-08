import React from "react";
import { Link } from 'react-router-dom';
import UserLocationsIndex from "../user_profile/user_locations_index";
import UserLocationsMap from "../user_profile/user_locations_map";

class List extends React.Component {
    constructor(props) {
        super(props);

        this.deleteList = this.deleteList.bind(this);
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

    deleteList() {
        this.props.deleteList(this.props.match.params.listId)
            .then(this.props.history.push('/'))
    }


    render() {

        const { list,
                author,
                currentUser,
                locations } = this.props;

        if (!list || !author) return (<div className="placeholder"></div>)

        let deleteOption;
        if (currentUser.id === author.id) {
            deleteOption = (
                <button className="delete-button" onClick={this.deleteList}>
                    Delete List
                </button>
            )
        }

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
                    {deleteOption}
                </div>
            </div>
        )
    }
}

export default List;