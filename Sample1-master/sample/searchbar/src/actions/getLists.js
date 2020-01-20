import GET_LIST from './actionConstants';
export const getLists = (payload) => {
    return({
        type:'GET_LIST',
        item :payload
    });
}