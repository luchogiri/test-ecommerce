// @flow

import {Actions} from '../actions/products';

const InitialState = {
  loading: false,
  items: []
};


const Products = (state: Object = { ...InitialState }, action: Object) => {

  switch (action.type) {

    case Actions.LOADING:
      return { ...state, loading: true };

    case Actions.UPDATE_ITEMS:
      return { ...state, items: action.data, loading: false };

    default:
      return state;
  }
};

export default Products;