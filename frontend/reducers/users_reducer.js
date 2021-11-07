import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, { [action.user.id]: action.user })
            return newState;
        case RECEIVE_USER:
            newState = Object.assign({}, oldState)
            newState[action.userPayload.user.id] = action.userPayload.user
            return newState;
        default:
            return oldState;
    };

};

export default usersReducer;