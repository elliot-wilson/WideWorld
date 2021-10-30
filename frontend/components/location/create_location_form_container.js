import { connect } from "react-redux";
import { createLocation } from "../../actions/location_actions";
import LocationForm from './location_form';

const mSTP = (state) => ({
    location: {
        title: "",
        summary: "",
        address: "",
        description: "",
        additional_info: "",
        official_website: "",
        initial_author_id: 1
    },
    formType: 'Create'
});

const mDTP = (dispatch) => ({
    action: location => dispatch(createLocation(location))
});

export default connect(mSTP, mDTP)(LocationForm);