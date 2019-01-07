
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import CartActions from '../actions/cart';

import Product from '../components/product';
import './products.scss';



class Products extends PureComponent {

  addToCart = i => {
    this.props.dispatch( CartActions.Add(i) );
  };

  setItems = () => {
    const {
      filter,
      subfilter,
      sort,
      quantity,
      items = []
    } = this.props;

    let data = items;
    if (filter instanceof Function)
      data = data.filter(filter);
    if (subfilter instanceof Function)
      data = data.filter(subfilter);
    if (sort instanceof Function)
      data = data.sort(sort);
    if (quantity)
      data = data.slice(0, quantity);
    return data;
  };


  render() {

    const {
      loading = false,
      title = '',
      home = false
    } = this.props;

    const placeholder = home ? [1,2,3,4,5]:[1,2,3,4];
    const items = loading ? [] : this.setItems();

    return (
      <section className="main-products">
        <h1 className="main-products__title">{title} {!home && `(${items.length})`}</h1>
        <section className={`main-products__list ${home ? 'main-products__list--home':''}`}>
          {loading ?
            placeholder.map(c => <Product key={c} />):
            items.map(i =>
              <Product
                key={i.id}
                id={i.id}
                title={i.name}
                price={i.price}
                stock={i.quantity}
                available={i.available}
                onPress={this.addToCart}
              />
            )
          }
        </section>
      </section>
    );
  }
}

export default connect( s => s.products )(Products);