export const createLocationVisit = (location_visit) => (
    $.ajax({
        method: 'POST',
        url: 'api/location_visits',
        data: {location_visit}
    })
);

export const deleteLocationVisit = (locationVisitId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/location_visits/${locationVisitId}`
    })
);