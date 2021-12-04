export const createLocationListing = (location_listing) => (
    $.ajax({
        method: 'POST',
        url: 'api/location_listings',
        data: {location_listing}
    })
);

export const deleteLocationListing = (locationListingId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/location_listings/${locationListingId}`
    })
)