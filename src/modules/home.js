
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import './categories';
import './home.scss';
import Categories from "./categories";
import CategoriesActions from "../actions/categories";


class Home extends PureComponent {

  componentDidMount() {
    this.props.dispatch( CategoriesActions.ResetSelected() );
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