// @flow

import {Actions} from '../actions/categories';

const InitialState = {
  loading: false,
  items: []
};

const Categories = (state: Object = { ...InitialState }, action: Object) => {

  switch (action.type) {

    case Actions.LOADING:
      return { ...state, loading: true };

    case Actions.UPDATE:
      return { ...state, items: action.data, loading: false };

    default:
      return state;
  }
};

export default Categories;
