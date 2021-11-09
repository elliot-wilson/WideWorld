export const fetchLocations = () => (
    $.ajax({
        method: 'GET',
        url: `api/locations`
    })
);

export const fetchRandomLocations = () => (
    $.ajax({
        method: 'GET',
        url: `api/random_locations`
    })
);

export const fetchLocation = (locationId) => (
    $.ajax({
        method: 'GET',
        url: `api/locations/${locationId}`
    })
)

export const createLocation = (location) => (
    $.ajax({
        method: 'POST',
        url: 'api/locations',
        data: location,
        contentType: false,
        processData: false
    })
);

export const updateLocation = (location, id) => (
    $.ajax({
        method: 'PATCH',
        url: `api/locations/${id}`,
        data: location,
        contentType: false,
        processData: false
    })
);

export const deleteLocation = (locationId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/locations/${locationId}`
    })
);