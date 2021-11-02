import { connect } from "react-redux";
import { logout, login } from "../../actions/session_actions";
import AuthIndex from './auth_index';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    login: () => dispatch(login({ email: "example@example.com", password: "123456" }))
});

export default connect(mSTP, mDTP)(AuthIndex);