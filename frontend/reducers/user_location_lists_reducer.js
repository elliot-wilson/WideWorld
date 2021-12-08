import { RECEIVE_LOCATION } from "../actions/location_actions";
import { RECEIVE_USER_LOCATION_LIST, RECEIVE_ADDL_USER_LOCATION_LIST, REMOVE_USER_LOCATION_LIST } from "../actions/user_location_list_actions";

// used on location page to show all the current user's lists

const _nullState = {};

const userLocationListsReducer = (oldState = _nullState, action) => {
    Object.freeze(oldState);
    let newState;

    switch(action.type) {
        case RECEIVE_USER_LOCATION_LIST:
            newState = Object.assign({}, oldState, {[action.userLocationListPayload.list.id]: action.userLocationListPayload.list});
            return newState;
        case RECEIVE_ADDL_USER_LOCATION_LIST:
            newState = Object.assign({}, oldState, {[action.userLocationList.id]: action.userLocationList});
            return newState;
        case REMOVE_USER_LOCATION_LIST:
            newState = Object.assign({}, oldState);
            delete newState[action.userLocationListId];
            return newState;
        case RECEIVE_LOCATION:
            let userLocationLists = action.locationPayload.current_user_lists;
            return userLocationLists ? userLocationLists : _nullState;
        default:
            return oldState;
    };
};

export default userLocationListsReducer;