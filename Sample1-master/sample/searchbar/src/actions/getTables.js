import GET_TABLE from './actionConstants';
export const getTables = (payload) => {
    return({
        type:'GET_TABLE',
        element :payload
    });
}