import { connect } from "react-redux";
import SessionForm from './session_form';
import { login, signup } from "../../actions/session_actions";

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'Sign Up'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);