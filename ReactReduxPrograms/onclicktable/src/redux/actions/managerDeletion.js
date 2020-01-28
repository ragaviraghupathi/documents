import { MANAGER_DELETION } from "./actionsConstants";
export const managerDeletion = (manager) => {
    console.log("inside manager action " + manager);
    return {
        type: MANAGER_DELETION,
        manager
      
    }
}