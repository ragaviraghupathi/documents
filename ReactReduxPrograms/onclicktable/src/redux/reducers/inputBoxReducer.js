import { defaultState } from '../defaultState';
import { INPUT_CREATION } from "../actions/actionsConstants";
export const inputBoxReducer = (state=defaultState.localName,action) => {
    switch(action.type) {
        case INPUT_CREATION:
            console.log("updating reducer" + action.localName);
            return state = action.localName;
    }
    return state;
}