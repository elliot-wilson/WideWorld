export const createLocationWannaVisit = (location_wanna_visit) => (
    $.ajax({
        method: 'POST',
        url: 'api/location_wanna_visits',
        data: { location_wanna_visit }
    })
);

export const deleteLocationWannaVisit = (locationWannaVisitId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/location_wanna_visits/${locationWannaVisitId}`
    })
);