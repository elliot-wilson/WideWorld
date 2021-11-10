export const fetchUserLocationList = (userLocationListId) => (
    $.ajax({
        method: 'GET',
        url: `api/user_location_lists/${userLocationListId}`
    })
);

export const createUserLocationList = (user_location_list) => (
    $.ajax({
        method: 'POST',
        url: 'api/user_location_lists/',
        data: { user_location_list }
    })
);

export const updateUserLocationList = (user_location_list) => (
    $.ajax({
        method: 'PATCH',
        url: `api/user_location_lists/${user_location_list.id}`,
        data: user_location_list
    })
)

export const deleteUserLocationList = (userLocationListId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/user_location_lists/${userLocationListId}`
    })
)