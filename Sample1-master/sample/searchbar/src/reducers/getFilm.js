const initialState = {
    filmList: [
        "Avengers",
        "Aqua Man",
        "Jungle Book",
        "Planet of the Apes",
        "Don't Breathe",
        "Birds Box",
        "Jumanji",
        "The Police Story",
        "Ride Alone"
    ],
    filmsArray: [],
    setTable: false,
    setList: false,
    inputBox: "",
    tableInput: "",
    initialText: ""
};
export function getFilm(state = initialState, action) {
    switch (action.type) {
        case 'GET_FILM':
            return (
                {
                    ...state,
                    filmsArray: action.updatedList
                }
            );
        case 'GET_TABLE':
            return (
                {
                    ...state,
                    tableInput: action.element,
                    setTable: true
                }
            );
        case 'GET_LIST':
            return (
                {
                    ...state,
                    inputBox: action.item,
                    setList: true
                }
            );
        default:
            return state;
    }
}