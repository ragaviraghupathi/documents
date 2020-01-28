import { defaultState } from '../defaultState';
import { MANAGER_CREATION, MANAGER_DELETION } from "../actions/actionsConstants";
export const managerReducer = (state=defaultState.managers,action) => {
    switch(action.type) {
        case MANAGER_CREATION:
            console.log("inside manager reducer"+action.manager);
            return [...state, action.manager];
        case MANAGER_DELETION:
            console.log("inside manager delete reducer"+action.manager); 
            const arrayLocal = state;
            return (defaultState.managers=arrayLocal.filter(item => item !== action.manager) )
            
    }
 
    return state;
}