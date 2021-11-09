import { RECEIVE_LOCATION } from "../actions/location_actions";
import { RECEIVE_LOCATION_WANNA_VISIT, REMOVE_LOCATION_WANNA_VISIT } from "../actions/location_wanna_visit_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const _nullStateObject = {};
const _nullStateArray = [];

const locationWannaVisitsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case RECEIVE_LOCATION:
            let wannaVisitors = action.locationPayload.wanna_visitors;
            return wannaVisitors ? wannaVisitors : _nullStateObject
        case RECEIVE_LOCATION_WANNA_VISIT:
            newState = Object.assign({}, oldState);
            newState[action.locationWannaVisit.id] = action.locationWannaVisit;
            return newState;
        case REMOVE_LOCATION_WANNA_VISIT:
            newState = Object.assign({}, oldState);
            delete newState[action.locationWannaVisitId];
            return newState;
        case RECEIVE_USER:
            let wannaVisits = action.userPayload.locationWannaVisits;
            return wannaVisits ? wannaVisits : _nullStateArray;
        default:
            return oldState;
    }
}

export default locationWannaVisitsReducer;