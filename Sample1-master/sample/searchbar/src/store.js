import {createStore , compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';

const initialState={

};
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(rootReducer, initialState,composeEnhancers(applyMiddleware()));
export default store;