import * as LocationAPIUtil from '../util/location_api_util';

export const RECEIVE_LOCATIONS = "RECEIVE_LOCATIONS";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";

const receiveLocations = (locations) => ({
    type: RECEIVE_LOCATIONS,
    locations
});

const receiveLocation = (locationPayload) => ({
    type: RECEIVE_LOCATION,
    locationPayload
});

const removeLocation = (locationId) => ({
    type: REMOVE_LOCATION,
    locationId
});

export const fetchLocations = () => dispatch =>
    LocationAPIUtil.fetchLocations()
        .then((locations) => dispatch(receiveLocations(locations)))

export const fetchLocation = (locationId) => dispatch =>
    LocationAPIUtil.fetchLocation(locationId)
        .then((locationPayload) => dispatch(receiveLocation(locationPayload)))

export const createLocation = (location) => dispatch =>
    LocationAPIUtil.createLocation(location)
        .then((location) => dispatch(receiveLocation(location)))

export const updateLocation = (location) => dispatch =>
    LocationAPIUtil.updateLocation(location)
        .then((location) => dispatch(receiveLocation(location)))

export const deleteLocation = (locationId) => dispatch =>
    LocationAPIUtil.deleteLocation(locationId)
        .then(() => dispatch(removeLocation(locationId)))