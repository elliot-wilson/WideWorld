import React from "react";
import { connect } from "react-redux";
import { updateLocation, fetchLocation } from "../../actions/location_actions";
import LocationForm from "./location_form";
import { withRouter } from "react-router";
import { createLocationEdit } from "../../actions/location_edit_actions";

class UpdateLocationForm extends React.Component {

    componentDidMount(){
        this.props.fetchLocation(this.props.match.params.locationId);
    };

    render() {
        const { action,
                formType,
                location,
                history,
                currentUserId,
                createLocationEdit } = this.props;

        if (!location) return null;

        return (
            <LocationForm
                history={history}
                location={location}
                action={action}
                formType={formType}
                currentUserId={currentUserId}
                createLocationEdit={createLocationEdit}
            />
        )

    };

}


const mSTP = (state, ownProps) => ({
    currentUserId: state.session.id,
    location: state.entities.locations.find(location => location.id.toString() === ownProps.match.params.locationId),
    formType: 'update'
});

const mDTP = (dispatch) => ({
    action: (location, id) => dispatch(updateLocation(location, id)),
    fetchLocation: locationId => dispatch(fetchLocation(locationId)),
    createLocationEdit: locationEdit => dispatch(createLocationEdit(locationEdit))
});

export default withRouter(connect(mSTP, mDTP)(UpdateLocationForm));