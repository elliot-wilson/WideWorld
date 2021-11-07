import { RECEIVE_USER } from "../actions/user_actions";

const _nullState = {};

const locationAddsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_USER:
            let adds = action.userPayload.locationAdds;
            return adds ? adds : _nullState;
        default:
            return oldState;
    }
};

export default locationAddsReducer;