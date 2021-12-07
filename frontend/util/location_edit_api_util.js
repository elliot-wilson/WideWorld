export const createLocationEdit = (location_edit) => (
    $.ajax({
        method: 'POST',
        url: 'api/location_edits',
        data: { location_edit }
    })
);