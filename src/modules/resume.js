
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './resume.scss';

class Resume extends PureComponent {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  listItems = () => {
    let map = {};
    const { cart = {},  products = {} } = this.props;

    cart.last_purchase.forEach(i => {
      map[i] = map[i] || { ...products.items.find(o => o.id === i), amount: 0 };
      map[i].amount++;
    });

    return Object.keys(map).map(i => map[i] );
  };

  render() {
    const items = this.listItems();

    return (
      <section className="checkout resume">
        <i className="fas fa-check-circle resume-icon" />
        <h1 className="checkout__title">Gracias por su compra!</h1>

        <h2 className="checkout__subtitle">su resumen:</h2>
        <h2 className="checkout__subtitle">
          {this.props.cart.last_purchase.length} artículo{this.props.cart.last_purchase.length > 1 ? 's':''},
          total: ${items.reduce((a,i) => a+ Number(i.price.replace(/[$|,]/g, ''))*i.amount, 0)}
        </h2>

        <Link to="/" className="resume__link">Volver a comenzar</Link>
      </section>
    );
  }
}


export default connect(s => ({ cart: s.cart, products: s.products }))(Resume);