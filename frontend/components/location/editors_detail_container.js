import { connect } from "react-redux";
import EditorsDetails from "./editors_details";

const mSTP = (state, ownProps) => ({
    location: ownProps.currLocation,
    editors: Object.values(state.entities.editors)
});


export default connect(mSTP, mDTP)(EditorsDetails)