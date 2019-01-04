
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import CategoriesActions from '../actions/categories';
import Header from '../components/header';


class Head extends PureComponent {


  render() {

    const { items = [], selected, sub } = this.props.categories || {};
    const category = items.find(c => c.id === selected);
    const tree = CategoriesActions.FindSublevel( category, sub );

    return (
      <React.Fragment>
        <Header
          category={category}
          tree={tree}
        />
      </React.Fragment>
    );
  }
}

export default connect(s => s)(Head);