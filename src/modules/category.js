
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import CategoriesActions from '../actions/categories';


class Category extends PureComponent {

  componentDidMount() {
    const {params = {}} = this.props.match || {};
    this.props.dispatch( CategoriesActions.SetCategory(params) );
  }

  render() {
    return (
      <React.Fragment>

        {JSON.stringify( this.props)}

      </React.Fragment>
    );
  }
}


export default connect(s => s.categories)(Category);