import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_LOCATION } from "../actions/location_actions";

const _nullState = {};

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, { [action.user.id]: action.user });
            return newState;
        case RECEIVE_USER:
            return { [action.userPayload.user.id]: action.userPayload.user };
        case RECEIVE_LOCATION:
            let locationListers = action.locationPayload.users;
            return locationListers ? locationListers : _nullState;
        default:
            return oldState;
    };

};

export default usersReducer;