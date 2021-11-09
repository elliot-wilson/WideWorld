import { RECEIVE_LOCATION, CLEAR_LOCATIONS } from "../actions/location_actions";
import { RECEIVE_LOCATION_VISIT, REMOVE_LOCATION_VISIT } from "../actions/location_visit_actions";
import { RECEIVE_USER } from "../actions/user_actions";


const _nullStateObject = {};
const _nullStateArray = [];

const locationVisitsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch(action.type) {
        case RECEIVE_LOCATION:
            let visitors = action.locationPayload.visitors;
            return visitors ? visitors : _nullStateObject;
        case RECEIVE_LOCATION_VISIT:
            newState = Object.assign({}, oldState);
            newState[action.locationVisit.id] = action.locationVisit;
            return newState;
        case REMOVE_LOCATION_VISIT:
            newState = Object.assign({}, oldState);
            delete newState[action.locationVisitId];
            return newState;
        case RECEIVE_USER:
            let visits = action.userPayload.locationVisits;
            return visits ? visits : _nullStateArray;
        case CLEAR_LOCATIONS:
            return _nullState;
        default:
            return oldState;
    }
};

export default locationVisitsReducer;