
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Logger from './logger';
import * as reducers from '../reducers';

export const Store = () => {

  const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk, Logger())
  );

  return store;
};

export default Store;