import GET_FILM from './actionConstants';
export const getActions = (payload) => {
    return({
        type:'GET_FILM',
        updatedList :payload
    });
}