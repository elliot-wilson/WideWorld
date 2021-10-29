import { connect } from "react-redux";
import SessionForm from './session_form';
import { signup } from "../../actions/session_actions";

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'Sign Up'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);