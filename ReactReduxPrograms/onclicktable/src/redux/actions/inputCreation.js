import { INPUT_CREATION } from "./actionsConstants";
export const inputCreation = (lname) => {
    console.log("inside the action");
    return {
        type:INPUT_CREATION,
        localName:lname
    }
}