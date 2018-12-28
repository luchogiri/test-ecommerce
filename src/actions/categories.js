
import Services from '../services';

export const Actions = {

  LOADING: 'loading',
  UPDATE: 'update'
};

const Categories = {

  Retrieve: () => async (dispatch) => {

    dispatch( Categories.Loading() );
    const data = await Services.GetCategories();
    dispatch( Categories.Update(data) );
  },

  Loading: () => ({ type: Actions.LOADING }),

  Update: data => ({ type: Actions.UPDATE, data }),
};

export default Categories;