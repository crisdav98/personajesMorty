import axios from 'axios';

// Constantes
let initialData = {
    fetching: false,
    array: [],
    current: {}
}
let URL = 'https://rickandmortyapi.com/api/character';
let GET_CHARACTER = "GET_CHARACTERS";
let GET_CHARACTER_SUCCESS = "GET_CHARACTER_SUCCESS"
let GET_CHARACTER_ERROR = "GET_CHARACTER_ERROR"
let REMOVE_CHARACTER = "REMOVE_CHARACTER"
// Reducer
export default function reducer(state = initialData, action) {

    switch (action.type) {
        case REMOVE_CHARACTER:
            return {
                ...state,
                array: action.payload
            }
        case GET_CHARACTER:
            return {
                ...state,
                fetching: true
            }
        case GET_CHARACTER_ERROR:
            return{
                ...state,
                fetching: false,
                error: action.payload
            }

        case GET_CHARACTER_SUCCESS:
            return {
                ...state,
                array: action.payload,
                fetching: false
            }
        default:
            return state;
    }
}
// Actions (thunk)
export let removeCharacterAction = ()=>(dispatch, getState)=>{
    let {array} = getState().characters;
    // shift() Elimina el primero elemento de la lista
    array.shift();
    dispatch({
        type: REMOVE_CHARACTER,
        payload:[...array]
    })
}


export let getCharactersAction = () => (dispatch, getState) => {
    dispatch({
        type: GET_CHARACTER
    })
    return axios.get(URL).then(res => {
        dispatch({
            type: GET_CHARACTER_SUCCESS,
            payload: res.data.results
        })
    }).catch((error)=>{
        console.log(" *** ERROR AL TRAER PERSONAJES ***");
        console.log(error);
        dispatch({
            type: GET_CHARACTER_ERROR,
            payload: error.response.message
        })
    });
}
