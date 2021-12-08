import { connect } from "react-redux";
import { createUserLocationList } from "../../actions/user_location_list_actions";
import CreateListModal from './create_list_modal';

const mSTP = (state, ownProps) => ({
    location: ownProps.location,
    currentUserId: state.session.id,
    opened: ownProps.opened
});

const mDTP = (dispatch, ownProps) => ({
    addLocationListing: ownProps.addLocationListing,
    closeCreateListModal: ownProps.closeCreateListModal,
    createUserLocationList: (userLocationList) => dispatch(createUserLocationList(userLocationList))
});

export default connect(mSTP, mDTP)(CreateListModal)