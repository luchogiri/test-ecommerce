
import React, {PureComponent} from 'react';

import './categories';
import './home.scss';
import Categories from "./categories";


export default class Home extends PureComponent {

  render() {
    return (
      <React.Fragment>

        <Categories />

      </React.Fragment>
    );
  }
}