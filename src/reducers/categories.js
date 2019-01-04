// @flow

import {Actions} from '../actions/categories';

const InitialState = {
  loading: false,
  selected: undefined,
  sub: undefined,
  items: []
};


const Categories = (state: Object = { ...InitialState }, action: Object) => {

  switch (action.type) {

    case Actions.LOADING:
      return { ...state, loading: true };

    case Actions.UPDATE_ITEMS:
      return { ...state, items: action.data, loading: false };

    case Actions.SET_CATEGORY:
      return { ...state, selected: action.category, sub: undefined };

    case Actions.SET_SUBLEVEL:
      // console.log( state, action );
      // const tree = FindSublevel( state.items.find(c => c.id === state.selected), action.sub );
      return { ...state, selected: action.category, sub: action.sublevel };

    default:
      return state;
  }
};


export default Categories;