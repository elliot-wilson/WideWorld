import { combineReducers } from "redux";
import locationsReducer from "./locations_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    locations: locationsReducer,
});

export default entitiesReducer;