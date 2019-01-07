// @flow

import {Actions} from '../actions/cart';

const InitialState = {
  items: [],
  last_purchase: []
};


const Cart = (state: Object = { ...InitialState }, action: Object) => {

  switch (action.type) {

    case Actions.ADD:
      return { ...state, items: [...state.items, action.data] };

    case Actions.REMOVE:
      const i = state.items.indexOf(action.data);
      return { ...state, items: [...state.items.slice(0,i), ...state.items.slice(i+1)] };

    case Actions.COMPLETE:
      return { ...state, last_purchase: [...state.items], items: [] };

    case Actions.CLEAN:
      return { ...state, items: [] };

    default:
      return state;
  }
};

export default Cart;