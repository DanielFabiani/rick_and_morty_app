//? el Store tiene que tener el reducer que es el que puede modificar el state

//? este se exporta al provider, 
//? el provider permite que todo lo que este en las etiquetas puedan acceder al store.

import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;