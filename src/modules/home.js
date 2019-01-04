
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import CategoriesActions from '../actions/categories';

import './home.scss';
import Categories from './categories';
import Products from './products';


class Home extends PureComponent {

  componentDidMount() {
    this.props.dispatch( CategoriesActions.ResetSelected() );
  }

  render() {
    return (
      <React.Fragment>

        <Categories />

        <Products
          title="Productos en oferta 🔥"
          filter={i => i.available}
          sort={(a,b) => Number(a.price.replace(/[$|,]/g,'')) - Number(b.price.replace(/[$|,]/g,''))}
          quantity={4}
        />

        <Products
          title="Productos con mucha demanda 😱"
          filter={i => i.available}
          sort={(a,b) => Number(a.quantity - b.quantity)}
          quantity={4}
        />

      </React.Fragment>
    );
  }
}

export default connect()(Home);