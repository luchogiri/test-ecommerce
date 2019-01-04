
import Services from '../services';

export const Actions = {

  LOADING: 'loading products',
  UPDATE_ITEMS: 'update items products'
};

const Products = {

  Retrieve: () => async (dispatch) => {

    dispatch( Products.Loading() );
    const data = await Services.GetProducts();
    dispatch( Products.UpdateItems(data) );
  },

  Loading: () => ({ type: Actions.LOADING }),

  UpdateItems: data => ({ type: Actions.UPDATE_ITEMS, data }),

};

export default Products;