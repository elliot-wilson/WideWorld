import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState) => (
    createStore(RootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;