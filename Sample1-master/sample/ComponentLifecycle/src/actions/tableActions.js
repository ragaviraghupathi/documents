export const tableActions= (payload)=>{
    return({
        type: 'TABLE_SHOW',
        arrayElement : payload
    });
}