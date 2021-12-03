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
    }

    render () {

        const {
            currentUserLists,
            addLocationListing,
            deleteLocationListing,
            location,
            locationListings } = this.props;

        return (
            <div
                onClick={() => this.setState({clicked: true})}
                className="add-to-list tag-button"
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
                />
            </div>
        )
    }
}

export default AddToListButton;