
import Services from '../services';

export const Actions = {

  LOADING: 'loading',
  UPDATE_ITEMS: 'update items',
  SET_CATEGORY: 'set category'
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

  ResetCategory: () => ({ type: Actions.SET_CATEGORY })
};

export default Categories;