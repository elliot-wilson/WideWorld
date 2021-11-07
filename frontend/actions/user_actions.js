import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (userPayload) => ({
    type: RECEIVE_USER,
    userPayload
});

export const fetchUser = (userId) => dispatch =>
    UserAPIUtil.fetchUser(userId)
        .then((userPayload) => dispatch(receiveUser(userPayload)))