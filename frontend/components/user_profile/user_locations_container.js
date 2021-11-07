import { connect } from "react-redux";
import UserLocationsBox from './user_locations_box';

const mSTP = (state, ownProps) => ({
    locationVisits: ownProps.locationVisits,
})

const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(UserLocationsBox);