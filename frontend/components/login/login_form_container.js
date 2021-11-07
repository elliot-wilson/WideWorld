import { connect } from "react-redux";
import SessionForm from './session_form';
import { login } from "../../actions/session_actions";
import { withRouter } from "react-router";

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: 'Login'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(login(user))
});

export default withRouter(connect(mSTP, mDTP)(SessionForm));