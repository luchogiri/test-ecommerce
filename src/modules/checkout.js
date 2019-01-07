
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import CartActions from '../actions/cart';
import CategoriesActions from '../actions/categories';
import Product from '../components/product';
import './checkout.scss';

class Checkout extends PureComponent {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch( CategoriesActions.ResetSelected() );
  }

  listItems = () => {
    let map = {};
    const { cart = {},  products = {} } = this.props;

    cart.items.forEach(i => {
      map[i] = map[i] || { ...products.items.find(o => o.id === i), amount: 0 };
      map[i].amount++;
    });

    return Object.keys(map).map(i => map[i] );
  };

  addToCart = i => {
    this.props.dispatch( CartActions.Add(i) );
  };

  subtractFromCart = i => {
    const amount = this.props.cart.items.reduce((a,item) => item === i ? a+1:a, 0);
    if (amount > 1)
      this.props.dispatch( CartActions.Remove(i) );

    else {
      let res = window.confirm('¿Seguro desea eliminar el artículo de su carrito?');
      if (res)
        this.props.dispatch( CartActions.Remove(i) );
    }
  };

  onComplete = () => {
    this.props.dispatch( CartActions.Complete() );
    this.props.history.push('/resume');
  };

  render() {
    const items = this.listItems();

    return (
      <section className="checkout">
        <h1 className="checkout__title">Artículos en su carrito ({items.length})</h1>
        <section className="checkout__list">
          {items.map(i =>
            <Product
              key={i.id}
              id={i.id}
              title={i.name}
              price={i.price}
              available={i.available}
              stock={i.quantity}
              amount={i.amount}
              onAdd={this.addToCart}
              onSubtract={this.subtractFromCart}
            />
          )}
        </section>

        <h1 className="checkout__title">Su orden:</h1>
        <h2 className="checkout__subtitle">
          {this.props.cart.items.length} artículos,
          total: ${items.reduce((a,i) => a+ Number(i.price.replace(/[$|,]/g, ''))*i.amount, 0)}
        </h2>

        {!!items.length &&
        <div className="flex checkout__complete" onClick={this.onComplete}>
          Complete su orden
        </div>}
      </section>
    );
  }
}


export default connect(s => ({ cart: s.cart, products: s.products }))(Checkout);