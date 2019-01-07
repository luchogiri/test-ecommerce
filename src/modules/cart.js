
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import './cart.scss';

class Cart extends PureComponent {

  render() {
    const {
      items = []
    } = this.props;

    return (
      <Link className={`cart ${items.length ? 'cart--available':''}`} to="/checkout">
        <i className="fas fa-shopping-cart" />
        {items.length} artículo{items.length > 1 && 's'}
      </Link>
    );
  }
}

export default connect( s => s.cart )(withRouter(Cart));