import { connect } from "react-redux";
import { withRouter } from "react-router";
import { deleteUserLocationList, fetchUserLocationList } from "../../actions/user_location_lists";
import List from "./list";

const mSTP = (state, ownProps) => ({
    list: state.entities.userLocationLists[ownProps.match.params.listId],
    author: state.entities.users,
    locations: state.entities.locations
});

const mDTP = (dispatch) => ({
    fetchList: listId => dispatch(fetchUserLocationList(listId)),
    deleteList: listId => dispatch(deleteUserLocationList(listId))
});

export default withRouter(connect(mSTP, mDTP)(List))