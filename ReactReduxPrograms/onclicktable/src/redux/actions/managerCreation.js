import { MANAGER_CREATION } from "./actionsConstants";
export const managerCreation = (name) => {
    console.log("inside manager action " + name);
    return {
        type:MANAGER_CREATION,
        manager:name
    }
}