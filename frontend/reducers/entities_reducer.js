import { combineReducers } from "redux";
import locationsReducer from "./locations_reducer";
import usersReducer from "./users_reducer";
import locationVisitsReducer from "./location_visits_reducer";
import locationWannaVisitsReducer from "./location_wanna_visits_reducer";
import locationEditsReducer from "./location_edits_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    locations: locationsReducer,
    locationVisits: locationVisitsReducer,
    locationWannaVisits: locationWannaVisitsReducer,
    locationEdits: locationEditsReducer
});

export default entitiesReducer;