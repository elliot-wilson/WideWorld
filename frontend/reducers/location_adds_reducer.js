import { RECEIVE_USER } from "../actions/user_actions";

const locationAddsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_USER:
            let adds = action.userPayload.locationAdds;
            return adds ? adds : oldState;
        default:
            return oldState;
    }
};

export default locationAddsReducer;