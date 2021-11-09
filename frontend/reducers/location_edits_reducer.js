import { RECEIVE_LOCATION } from "../actions/location_actions";
import { RECEIVE_LOCATION_EDIT } from "../actions/location_edit_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const _nullStateObject = {};
const _nullStateArray = [];

const locationEditsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState;

    switch(action.type) {
        case RECEIVE_LOCATION:
            let editors = action.locationPayload.editors;
            return editors ? editors : _nullStateObject;
        case RECEIVE_LOCATION_EDIT:
            newState = Object.assign({}, oldState);
            newState[action.locationEdit.id] = action.locationEdit;
            return newState;
        case RECEIVE_USER:
            let edits = action.userPayload.locationEdits;
            return edits ? edits : _nullStateArray;
        default:
            return oldState;
    }
};

export default locationEditsReducer;