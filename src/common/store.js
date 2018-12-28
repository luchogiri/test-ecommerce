// @flow

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


export const Store = (onComplete: Function = () => {}) => {

  const store = createStore(
    combineReducers([]),
    applyMiddleware(thunk)
  );

  onComplete();
  return store;
};

export default Store;