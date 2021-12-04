import React from 'react'
import { Link } from 'react-router-dom';
import CreateListModalContainer from './create_list_modal_container';

class AddToListModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            createListClicked: false
        }

        this.bindFuncs();
    }

    bindFuncs() {
        this.displayLists = this.displayLists.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.findListing = this.findListing.bind(this);
        this.isChecked = this.isChecked.bind(this);
        this.openCreateListModal = this.openCreateListModal.bind(this);
        this.closeCreateListModal = this.closeCreateListModal.bind(this);
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
        let checked = this.findListing(listId);
        return !!checked;
    }

    openCreateListModal() {
        this.setState({createListClicked: true});
    }

    closeCreateListModal() {
        this.setState({createListClicked: false});
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
                    <Link to={`/lists/${list.id}`}>VIEW</Link>
                </div>
            ))
        } else {
            listsDisplay = (<div></div>)
        }

        return listsDisplay;
    }

    render() {
        
        const { clicked,
                location,
                addLocationListing } = this.props;

        const klass = clicked ? "clicked" : null;

        return (
            <div className={`add-to-list-modal ${klass}`}>
                {this.displayLists()}
                <div className="create-new-list" onClick={this.openCreateListModal}>
                    <p>+ CREATE NEW LIST</p>
                </div>
                <CreateListModalContainer
                    addLocationListing={addLocationListing}
                    location={location}
                    opened={this.state.createListClicked}
                    closeCreateListModal={this.closeCreateListModal}
                />
                <div
                    className="add-to-list-modal-background"
                    onClick={this.props.closeAddToListModal}
                />
            </div>
        )
    }
}

export default AddToListModal;