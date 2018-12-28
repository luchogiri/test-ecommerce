
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Category from '../components/category';
import './categories.scss';



class Categories extends PureComponent {

  render() {

    const {
      loading = false,
      items = []
    } = this.props;

    const placeholder = [1,2,3,4];

    return (
      <section className="main-categories">
        <h1 className="main-categories__title">Nuestras categorías</h1>
        <nav className="main-categories__list">
          {loading ?
            placeholder.map(c => <Category key={c} to='' />):
            items.map(c => <Category key={c.id} to={`/${c.name.toLowerCase()}-${c.id}`}>{c.name}</Category>)
          }
        </nav>
      </section>
    );
  }
}

export default connect( s => s.categories )(Categories);