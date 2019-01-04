
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import CategoriesActions from '../actions/categories';
import ProductsActions from '../actions/products';

import './home.scss';
import Categories from './categories';


class Home extends PureComponent {

  componentDidMount() {
    this.props.dispatch( CategoriesActions.ResetSelected() );
    this.props.dispatch( ProductsActions.Retrieve() );
  }

  render() {
    return (
      <React.Fragment>

        <Categories />

      </React.Fragment>
    );
  }
}

export default connect()(Home);