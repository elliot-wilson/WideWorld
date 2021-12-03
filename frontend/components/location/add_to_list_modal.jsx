import React from 'react'
import { Link } from 'react-router-dom';

class AddToListModal extends React.Component {
    constructor(props) {
        super(props);

        this.bindFuncs();
    }

    bindFuncs() {
        this.displayLists = this.displayLists.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.findListing = this.findListing.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    handleClick(listId) {
        let listingId = this.findListing(listId);
        if (listingId) {
            this.props.deleteLocationListing(listingId);
        } else {
            this.props.addLocationListing({
                location_id: this.props.location.id,
                list_id: listId
            });
        }
    }

    findListing(listId) {
        const { locationListings } = this.props;
        for (let listing of locationListings) {
            if (listing.list_id === listId) {
                return listing.id
            }
        }
    }

    isChecked(listId) {
        const { locationListings } = this.props;
        let checked = this.findListing(listId);
        return !!checked;
    }
    
    displayLists() {
        const { currentUserLists } = this.props;

        let listsDisplay;
        if (currentUserLists) {
            listsDisplay = currentUserLists.map((list, idx) => (
                <div className="lists-list">
                    <div>
                        <input
                            checked={this.isChecked(list.id)}
                            onClick={() => this.handleClick(list.id)}
                            type="checkbox"
                            id={`list-${idx}`}
                        />
                        <label htmlFor={`list-${idx}`}>{list.title}</label>
                    </div>
                    <Link to="/">VIEW</Link>
                </div>
            ))
        } else {
            listsDisplay = (<div></div>)
        }

        return listsDisplay;
    }

    render() {
        
        const { clicked } = this.props;

        const klass = clicked ? "clicked" : null;

        return (
            <div className={`add-to-list-modal ${klass}`}>
                {this.displayLists()}
                <div>
                    <p>+ CREATE NEW LIST</p>
                </div>
            </div>
        )
    }
}

export default AddToListModal;