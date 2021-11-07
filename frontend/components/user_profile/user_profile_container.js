import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import UserProfile from './user_profile';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    locationVisits: Object.values(state.entities.locationVisits),
    locationWannaVisits: Object.values(state.entities.locationWannaVisits),
    locationAdds: Object.values(state.entities.locationAdds),
    locationEdits: Object.values(state.entities.locationEdits)

});

const mDTP = (dispatch) => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(UserProfile)