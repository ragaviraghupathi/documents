import { createStore, applyMiddleware,compose } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from '../reducers/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
    localName: "",
    managers: []
};



export const store = createStore(rootReducer, initialState,composeEnhancers(applyMiddleware(logger)));