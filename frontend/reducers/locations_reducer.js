import { RECEIVE_LOCATIONS, RECEIVE_LOCATION, REMOVE_LOCATION, CLEAR_LOCATIONS } from "../actions/location_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const _nullState = [];

const locationsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState;

    switch(action.type){
        case RECEIVE_LOCATIONS:
            return action.locations;
        case RECEIVE_LOCATION:
            return [action.locationPayload.location];
        case REMOVE_LOCATION:
            delete newState[action.locationId];
            return newState;
        case RECEIVE_USER:
            return _nullState;
        case CLEAR_LOCATIONS:
            return _nullState;
        default:
            return oldState;
    }

}

export default locationsReducer;