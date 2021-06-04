// Constantes
let initialData = {
    loggedIn: false
}
let LOGIN = "LOGIN"
// Reducer
export default function reducer(state= initialData,action){
    switch (action.type) {
        case LOGIN:
            break;
    
        default:
            return state;
    }
}
// Action (action creator)