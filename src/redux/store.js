import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import userReducer from './userDuck';
import characterReducer, { getCharactersAction} from './cahrsDuck';
import thunk from 'redux-thunk'


let rootReducer = combineReducers({
    user: userReducer,
    characters: characterReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
    let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    getCharactersAction()(store.dispatch, store.getState)
    return store;
}
