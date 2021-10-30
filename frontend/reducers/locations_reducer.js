import { RECEIVE_LOCATIONS, RECEIVE_LOCATION, REMOVE_LOCATION } from "../actions/location_actions";

const locationsReducer = (oldState ={}, action) {
    Object.freeze(oldState);
    let newState;

    switch(action.type){
        case RECEIVE_LOCATIONS:
            return action.locations;
        case RECEIVE_LOCATION:
            newState[action.location.id] = action.location;
            return newState;
        case REMOVE_LOCATION:
            delete newState[action.locationId];
            return newState;
        default:
            return oldState;
    }

}

export default locationsReducer;