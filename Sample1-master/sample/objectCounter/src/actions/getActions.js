export const getActions= (payload)=>{
    return({
        type: 'GET_DATA',
        value : payload
    });
}