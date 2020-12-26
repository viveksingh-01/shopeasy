import {createStore, combineReducers, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({});
const initialState = {};
const store:Store<any> = createStore(reducer, initialState, composeWithDevTools());

export default store;