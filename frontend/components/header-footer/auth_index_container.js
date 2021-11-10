import { connect } from "react-redux";
import { logout, login } from "../../actions/session_actions";
import AuthIndex from './auth_index';

const mSTP = (state) => ({
    currentUser: state.session
});

const mDTP = (dispatch) => {
    const formData = new FormData();
    formData.append("user[email]", "example@example.com");
    formData.append("user[password]", "123456");

    return ({
        logout: () => dispatch(logout()),
        login: () => dispatch(login(formData))
    });
};

export default connect(mSTP, mDTP)(AuthIndex);