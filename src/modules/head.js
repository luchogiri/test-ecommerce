
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Header from '../components/header';


class Head extends PureComponent {

  render() {

    const { items = [], selected } = this.props.categories || {};
    let category;

    if (selected)
      category = items.find(c => c.id === selected);

    console.log(this.props);

    return (
      <React.Fragment>
        <Header
          category={category}
        />
      </React.Fragment>
    );
  }
}

export default connect(s => s)(Head);