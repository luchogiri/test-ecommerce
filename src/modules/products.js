
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import './products.scss';
import Product from '../components/product';



class Products extends PureComponent {

  showItems = () => {
    const {
      filter,
      sort,
      quantity,
      items = []
    } = this.props;

    let data = items;
    if (filter instanceof Function)
      data = data.filter(filter);
    if (sort instanceof Function)
      data = data.sort(sort);
    if (quantity)
      data = data.slice(0, quantity);

    return data.map(c =>
      <Product
        key={c.id}
        title={c.name}
        price={c.price}
        stock={c.quantity}
        available={c.available}
      />
    )
  };


  render() {

    const {
      loading = false,
      title = ''
    } = this.props;

    const placeholder = [1,2,3,4];

    return (
      <section className="main-products">
        <h1 className="main-products__title">{title}</h1>
        <nav className="main-products__list">
          {loading ?
            placeholder.map(c => <Product key={c} />):
            this.showItems()
          }
        </nav>
      </section>
    );
  }
}

export default connect( s => s.products )(Products);