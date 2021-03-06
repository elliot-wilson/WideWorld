import { connect } from "react-redux";
import { createLocation } from "../../actions/location_actions";
import LocationForm from './location_form';
import { withRouter } from "react-router";

const mSTP = (state) => ({
    location: {
        title: "",
        summary: "",
        lat: "",
        lng: "",
        address: "",
        description: "",
        additional_info: "",
        official_website: "",
        initial_author: { id: state.session.id }
    },
    formType: 'create'
});

const mDTP = (dispatch) => ({
    action: (location) => dispatch(createLocation(location))
});

export default withRouter(connect(mSTP, mDTP)(LocationForm));