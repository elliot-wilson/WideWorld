import * as LocationWannaVisitAPIUtil from '../util/location_wanna_visit_api_util';

export const RECEIVE_LOCATION_WANNA_VISIT = "RECEIVE_LOCATION_WANNA_VISIT";
export const REMOVE_LOCATION_WANNA_VISIT = "REMOVE_LOCATION_WANNA_VISIT";

const receiveLocationWannaVisit = (locationWannaVisit) => ({
    type: RECEIVE_LOCATION_WANNA_VISIT,
    locationWannaVisit
});

const removeLocationWannaVisit = (locationWannaVisitId) => ({
    type: REMOVE_LOCATION_WANNA_VISIT,
    locationWannaVisitId
});

export const createLocationWannaVisit = (locationWannaVisit) => dispatch =>
    LocationWannaVisitAPIUtil.createLocationWannaVisit(locationWannaVisit)
        .then((locationWannaVisit) => dispatch(receiveLocationWannaVisit(locationWannaVisit)))

export const deleteLocationWannaVisit = (locationWannaVisitId) => dispatch =>
    LocationWannaVisitAPIUtil.deleteLocationWannaVisit(locationWannaVisitId)
        .then(() => dispatch(removeLocationWannaVisit(locationWannaVisitId)))