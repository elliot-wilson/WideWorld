import * as LocationVisitAPIUtil from '../util/location_visit_api_util';

export const RECEIVE_LOCATION_VISIT = "RECEIVE_LOCATION_VISIT";
export const REMOVE_LOCATION_VISIT = "REMOVE_LOCATION_VISIT";

const receiveLocationVisit = (locationVisit) => ({
    type: RECEIVE_LOCATION_VISIT,
    locationVisit
});

const removeLocationVisit = (locationVisitId) => ({
    type: REMOVE_LOCATION_VISIT,
    locationVisitId
});

export const createLocationVisit = (locationVisit) => dispatch =>
    LocationVisitAPIUtil.createLocationVisit(locationVisit)
        .then((locationVisit) => dispatch(receiveLocationVisit(locationVisit)))

export const deleteLocationVisit = (locationVisitId) => dispatch =>
    LocationVisitAPIUtil.deleteLocationVisit(locationVisitId)
        .then(() => dispatch(removeLocationVisit(locationVisitId)))