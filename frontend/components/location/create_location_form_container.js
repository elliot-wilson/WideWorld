import { connect } from "react-redux";
import { createLocation } from "../../actions/location_actions";
import LocationForm from './location_form';

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
        photos: [],
        initial_author_id: state.session.id
    },
    formType: 'create'
});

const mDTP = (dispatch) => ({
    action: (location) => dispatch(createLocation(location))
});

export default connect(mSTP, mDTP)(LocationForm);