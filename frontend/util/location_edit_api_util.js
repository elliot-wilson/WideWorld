export const createLocationEdit = (location_edit) => (
    $.ajax({
        method: 'POST',
        url: 'api/location/edits',
        data: { location_edit }
    })
);