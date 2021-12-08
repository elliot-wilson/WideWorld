import * as UserLocationListAPIUtil from '../util/user_location_list_api_util'

export const RECEIVE_USER_LOCATION_LIST = "RECEIVE_USER_LOCATION_LIST";
export const REMOVE_USER_LOCATION_LIST = "REMOVE_USER_LOCATION_LIST";
export const RECEIVE_ADDL_USER_LOCATION_LIST = "RECEIVE_ADDL_USER_LOCATION_LIST";

const receiveUserLocationList = (userLocationListPayload) => ({
    type: RECEIVE_USER_LOCATION_LIST,
    userLocationListPayload
});

const receiveAddlUserLocationList = (userLocationList) => ({
    type: RECEIVE_ADDL_USER_LOCATION_LIST,
    userLocationList
})

const removeUserLocationList = (userLocationListId) => ({
    type: REMOVE_USER_LOCATION_LIST,
    userLocationListId
});

export const fetchUserLocationList = (userLocationListId) => dispatch =>
    UserLocationListAPIUtil.fetchUserLocationList(userLocationListId)
        .then((userLocationList) => dispatch(receiveUserLocationList(userLocationList)))

export const createUserLocationList = (userLocationList) => dispatch =>
    UserLocationListAPIUtil.createUserLocationList(userLocationList)
        .then((userLocationList) => dispatch(receiveAddlUserLocationList(userLocationList)))

export const updateUserLocationList = (userLocationList) => dispatch =>
    UserLocationListAPIUtil.updateUserLocationList(userLocationList)
        .then((userLocationList) => dispatch(receiveUserLocationList(userLocationList)))

export const deleteUserLocationList = (userLocationListId) => dispatch =>
    UserLocationListAPIUtil.deleteUserLocationList(userLocationListId)
        .then(() => dispatch(removeUserLocationList(userLocationListId)))