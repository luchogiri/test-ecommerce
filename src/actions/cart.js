
export const Actions = {

  ADD: 'add to cart',
  REMOVE: 'remove from cart',
  COMPLETE: 'complete order',
  CLEAN: 'clean cart'
};

const Cart = {

  Add: data => ({ type: Actions.ADD, data }),

  Remove: data => ({ type: Actions.REMOVE, data }),

  Complete: () => ({ type: Actions.COMPLETE }),

  Clean: data => ({ type: Actions.CLEAN })

};

export default Cart;