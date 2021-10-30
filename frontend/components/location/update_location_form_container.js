import React from "react";
import { connect } from "react-redux";
import { updateLocation, fetchLocation } from "../../actions/location_actions";
import LocationForm from "./location_form";

class UpdateLocationForm extends React.Component {

    componentDidMount(){
        this.props.fetchLocation(this.props.match.params.id);
    };

    render() {
        const { action, formType, post } = this.props;
        console.log('ayyyy')
        if (!post) return null;
        console.log('ayyyyyyyy')

        return (
            <LocationForm
                post={post}
                action={action}
                formType={formType}
            />
        )

    };

}


const mSTP = (state, ownProps) => ({
    location: state.entities.locations[ownProps.match.params.id],
    formType: 'update'
});

const mDTP = (dispatch) => ({
    action: location => dispatch(updateLocation(location)),
    fetchLocation: locationId => dispatch(fetchLocation(locationId))
});

export default connect(mSTP, mDTP)(UpdateLocationForm)