import { connect } from "react-redux";
import SessionForm from './session_form';
import { login } from "../../actions/session_actions";

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: 'Login'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);