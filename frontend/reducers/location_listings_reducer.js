import { RECEIVE_LOCATION } from "../actions/location_actions";
import { RECEIVE_LOCATION_LISTING, REMOVE_LOCATION_LISTING } from "../actions/location_listing_actions";

//used in state to display a list of all lists that a location is in

const _nullState = {};

const locationListingsReducer = (oldState = _nullState, action) => {
    Object.freeze(oldState);
    let newState;
    
    switch(action.type) {
        case RECEIVE_LOCATION:
            let locationListings = action.locationPayload.location_listings;
            return locationListings ? locationListings : _nullState;
        case RECEIVE_LOCATION_LISTING:
            newState = Object.assign({}, oldState);
            newState[action.locationListing.id] = action.locationListing;
            return newState;
        case REMOVE_LOCATION_LISTING:
            newState = Object.assign({}, oldState);
            delete newState[action.locationListingId];
            return newState;
        default:
            return oldState;
    }
}

export default locationListingsReducer;