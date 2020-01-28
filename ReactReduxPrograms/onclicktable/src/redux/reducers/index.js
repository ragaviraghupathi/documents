import { combineReducers } from "redux";
import { managerReducer } from "../reducers/managerReducer";
import { inputBoxReducer } from '../reducers/inputBoxReducer';

export const rootReducer = combineReducers({ inputBoxReducer,managerReducer });