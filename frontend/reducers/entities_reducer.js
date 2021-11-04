import { combineReducers } from "redux";
import locationsReducer from "./locations_reducer";
import usersReducer from "./users_reducer";
import locationVisitsReducer from "./location_visits_reducer";
import locationWannaVisitsReducer from "./location_wanna_visits_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    locations: locationsReducer,
    locationVisits: locationVisitsReducer,
    locationWannaVisits: locationWannaVisitsReducer
});

export default entitiesReducer;