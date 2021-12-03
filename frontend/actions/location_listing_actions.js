import * as LocationListingAPIUtil from '../util/location_listing_api_util';

export const RECEIVE_LOCATION_LISTING = "RECEIVE_LOCATION_LISTING";
export const REMOVE_LOCATION_LISTING = "REMOVE_LOCATION_LISTING";

const receiveLocationListing = (locationListing) => ({
    type: RECEIVE_LOCATION_LISTING,
    locationListing
});

const removeLocationListing = (locationListingId) => ({
    type: REMOVE_LOCATION_LISTING,
    locationListingId
})

export const createLocationListing = (locationListing) => dispatch => 
    LocationListingAPIUtil.createLocationListing(locationListing)
        .then((locationListing) => dispatch(receiveLocationListing(locationListing)))

export const deleteLocationListing = (locationListingId) => dispatch =>
    LocationListingAPIUtil.deleteLocationListing(locationListingId)
        .then(() => dispatch(removeLocationListing(locationListingId)))