import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createLocationVisit, deleteLocationVisit } from "../../actions/location_visit_actions";
import { createLocationWannaVisit, deleteLocationWannaVisit } from '../../actions/location_wanna_visit_actions';
import TagButtons from "./tag_buttons";

const mSTP = (state, ownProps) => {

    const visits = Object.values(state.entities.locationVisits);
    const wannaVisits = Object.values(state.entities.locationWannaVisits);
    const currentUser = state.session.id;

    const visit = visits.find(visit => visit.visitor_id === currentUser);
    const wannaVisit = wannaVisits.find(wannaVisit => wannaVisit.wanna_visitor_id === currentUser);

    return {
        location: ownProps.currLocation,
        currentUser: currentUser,
        visits: visits,
        wannaVisits: wannaVisits,
        visit: visit,
        wannaVisit: wannaVisit
    }
}

const mDTP = (dispatch) => ({
    addVisit: locationVisit => dispatch(createLocationVisit(locationVisit)),
    deleteVisit: locationVisitId => dispatch(deleteLocationVisit(locationVisitId)),
    addWannaVisit: locationWannaVisit => dispatch(createLocationWannaVisit(locationWannaVisit)),
    deleteWannaVisit: locationWannaVisitId => dispatch(deleteLocationWannaVisit(locationWannaVisitId))
})

export default withRouter(connect(mSTP, mDTP)(TagButtons));