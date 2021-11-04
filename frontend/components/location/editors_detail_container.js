import { connect } from "react-redux";
import EditorsDetails from "./editors_details";

const mSTP = (state, ownProps) => {

    const location = ownProps.currLocation
    const editors = state.entities.locationEdits;
    const initialEditor = location.initial_author


    return {
        location,
        editors,
        initialEditor
    }
};


export default connect(mSTP)(EditorsDetails)