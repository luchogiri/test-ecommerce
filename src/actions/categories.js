
import Services from '../services';

export const Actions = {

  LOADING: 'loading',
  UPDATE_ITEMS: 'update items',
  SET_CATEGORY: 'set category',
  SET_SUBLEVEL: 'set sublevel',
};

const Categories = {

  Retrieve: () => async (dispatch) => {

    dispatch( Categories.Loading() );
    const data = await Services.GetCategories();
    dispatch( Categories.UpdateItems(data) );
  },

  Loading: () => ({ type: Actions.LOADING }),

  UpdateItems: data => ({ type: Actions.UPDATE_ITEMS, data }),

  SetCategory: data => {
    const param = data.category || '';
    const category = Number( param.substr(param.lastIndexOf('-')+1));
    return {
      type: Actions.SET_CATEGORY,
      category
    };
  },

  SetSublevel: data => {
    const param = data.sublevel || '';
    const sublevel = Number( param.substr(param.lastIndexOf('-')+1));
    const {category} = Categories.SetCategory( data );
    return {
      type: Actions.SET_SUBLEVEL,
      category,
      sublevel
    };
  },

  FindSublevel: (data = {}, id) => {

    let result = [];
    if (!Array.isArray(data.sublevels)) return result;

    const iterator = (d = {}, tree) => {
      tree = [...tree, d];
      if (d.id === id) return result = tree;
      return Array.isArray(d.sublevels) && d.sublevels.some(o => iterator(o, tree));
    };

    data.sublevels.some(d => iterator(d, []));
    return result;
  },

  ResetSelected: () => ({ type: Actions.SET_SUBLEVEL })
};

export default Categories;