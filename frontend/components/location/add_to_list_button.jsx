import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import AddToListModal from './add_to_list_modal';

class AddToListButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }

        this.closeAddToListModal = this.closeAddToListModal.bind(this);
        this.openAddToListModal = this.openAddToListModal.bind(this);
    }

    closeAddToListModal() {
        this.setState({clicked: false});
    }

    openAddToListModal(e) {
        if (!this.props.currentUser) return this.props.history.push("/login");
        const modalBg = document.querySelector('.add-to-list-modal-background');
        if (e.target !== modalBg) {
            this.setState({clicked: true})
        };
    }

    render () {

        const {
            currentUserLists,
            addLocationListing,
            deleteLocationListing,
            location,
            locationListings } = this.props;

        const klass = this.state.clicked ? "clicked" : null;

        return (
            <div
                onClick={this.openAddToListModal}
                className={`add-to-list tag-button ${klass}`}
            >
                <FontAwesomeIcon icon={faListUl}/>
                <p>ADD TO LIST</p>
                <AddToListModal
                    clicked={this.state.clicked}
                    currentUserLists={currentUserLists}
                    addLocationListing={addLocationListing}
                    deleteLocationListing={deleteLocationListing}
                    location={location}
                    locationListings={locationListings}
                    closeAddToListModal={this.closeAddToListModal}
                />
            </div>
        )
    }
}

export default AddToListButton;