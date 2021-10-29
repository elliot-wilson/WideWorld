import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, { [action.user.id]: action.user })
        return newState;
        default:
            return oldState;
    };

};

export default usersReducer;