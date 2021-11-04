import * as LocationEditAPIUtil from '../util/location_edit_api_util';

export const RECEIVE_LOCATION_EDIT = "RECEIVE_LOCATION_EDIT";

const receiveLocationEdit = (locationEdit) => ({
    type: RECEIVE_LOCATION_EDIT,
    locationEdit
});

export const createLocationEdit = (locationEdit) => dispatch =>
    LocationEditAPIUtil.createLocationEdit(locationEdit)
        .then((locationEdit) => dispatch(receiveLocationEdit(locationEdit)))