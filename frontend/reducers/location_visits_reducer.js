import { RECEIVE_LOCATION } from "../actions/location_actions";
import { RECEIVE_LOCATION_VISIT, REMOVE_LOCATION_VISIT } from "../actions/location_visit_actions";

const locationVisitsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState;

    switch(action.type) {
        case RECEIVE_LOCATION:
            let visitors = action.locationPayload.visitors;
            return visitors ? visitors : oldState;
        case RECEIVE_LOCATION_VISIT:
            newState = Object.assign({}, oldState);
            newState[action.locationVisit.id] = action.locationVisit;
            return newState;
        case REMOVE_LOCATION_VISIT:
            newState = Object.assign({}, oldState);
            delete newState[action.locationVisitId];
            return newState;
        default:
            return oldState;
    }
}

export default locationVisitsReducer;