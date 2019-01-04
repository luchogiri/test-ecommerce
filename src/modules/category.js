
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import CategoriesActions from '../actions/categories';
import Sublevels from "../components/sublevels";
import './category.scss';

class Category extends PureComponent {

  componentDidMount() {
    window.scrollTo(0, 0);
    const {params = {}} = this.props.match;
    this.props.dispatch( CategoriesActions.SetCategory( params ));
  }

  render() {
    const {items = [], selected} = this.props;
    const category = items.find(c => c.id === selected) || {};
    const img = !category.name ? '':
      require(`../images/${String(category.name).toLowerCase()}.jpeg`);

    return (
      <React.Fragment>

        <header
          className="flex category-header"
          style={{backgroundImage: `url(${img})`}}>
          <h1 className="flex category-header__title">{category.name}</h1>
        </header>

        <section className="category-wrapper">

          <aside className="category-side">
            <Sublevels
              category={category}
              match={this.props.match}
            />
          </aside>

          <section className="category-items">
            <h3 className="category-side__title">Productos</h3>
          </section>

        </section>
      </React.Fragment>
    );
  }
}


export default connect(s => s.categories)(Category);