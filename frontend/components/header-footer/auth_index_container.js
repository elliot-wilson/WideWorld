import { connect } from "react-redux";
import { withRouter } from "react-router";
import { logout, login } from "../../actions/session_actions";
import AuthIndex from './auth_index';

const mSTP = (state) => ({
    currentUser: state.session
});

const mDTP = (dispatch, ownProps) => {
    const formData = new FormData();
    formData.append("user[email]", "example@example.com");
    formData.append("user[password]", "123456");

    return ({
        logout: () => dispatch(logout()),
        login: () => dispatch(login(formData)),
        closeSearch: ownProps.closeSearch
    });
};

export default withRouter(connect(mSTP, mDTP)(AuthIndex));