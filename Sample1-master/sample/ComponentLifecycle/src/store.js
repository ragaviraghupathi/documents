import {createStore , applyMiddleware, compose} from 'redux';
import rootreducer from './reducers/index';

const initialState ={

};

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(rootreducer ,initialState,composeEnhancers(applyMiddleware()));
export default store;
