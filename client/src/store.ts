import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productDetailReducer, productsReducer } from './reducers/productsReducer';

const reducer = combineReducers({ productsList: productsReducer, productDetail: productDetailReducer });
const initialState = {};
const middleware = [thunk];
const store: Store<any> = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
