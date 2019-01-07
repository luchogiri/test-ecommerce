
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk';

import Logger from './logger';
import * as reducers from '../reducers';

export const Store = () => {

  const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk, Logger()),
    autoRehydrate()
  );

  persistStore(store, {});
  return store;
};

export default Store;