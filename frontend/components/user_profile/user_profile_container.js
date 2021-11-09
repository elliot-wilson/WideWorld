import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import UserProfile from './user_profile';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    locations: state.entities.locations,
    locationVisits: state.entities.locationVisits,
    locationWannaVisits: state.entities.locationWannaVisits,
    locationAdds: state.entities.locationAdds,
    locationEdits: state.entities.locationEdits

});

const mDTP = (dispatch) => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
});

export default connect(mSTP, mDTP)(UserProfile)