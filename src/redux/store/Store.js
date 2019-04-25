import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {GET_DATA_REDUCER,NEW_DATA_REDUCER,DELETE_DATA_REDUCER,UPDATE_DATA_REDUCER} from '../reducers/Reducer';

const CATALOGO = combineReducers({
	stateDatos: GET_DATA_REDUCER,
	responseNewDato: NEW_DATA_REDUCER,
	responseDeleteDato: DELETE_DATA_REDUCER,
	responseUpdateDato: UPDATE_DATA_REDUCER
});

const Store = createStore(CATALOGO, applyMiddleware(promiseMiddleware));

export default Store;