const initialState = {
    studentDetails:[
        {
            firstName: "Ramona",
            lastName: "Vinod",
            age : 1 ,
        },
        {
            firstName: "Ragavi",
            lastName: "Raghupathi",
            age : 25,
        },
        {
            firstName: "Vinod",
            lastName: "Nagaraj",
            age : 31,
        }
    ],
    noOfObjects : 0
};
export function getData(state= initialState , action){

    switch(action.type){
        case 'GET_DATA':
        return (
            {...state,
            noOfObjects:action.value}
        );
        default:
        return state;
    }
}