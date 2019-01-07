
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import * as Query from '../helpers/query';
import CategoriesActions from '../actions/categories';
import Products from './products';
import Order, {OrderMethod} from './order';
import Filter, {FilterMethod} from './filter';

import Sublevels from '../components/sublevels';
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
    const sublevels = CategoriesActions.ListSublevels(category);

    const query = Query.Parse(this.props.location.search);
    const order = OrderMethod[query.order];
    const filter = FilterMethod(query);

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

            <Order {...this.props} />
            <Filter {...this.props} />

          </aside>

          <section className="category-items">
            <Products
              title="Todos los productos"
              filter={i => sublevels.indexOf(i.sublevel_id) !== -1}
              subfilter={filter}
              sort={order}
            />
          </section>

        </section>
      </React.Fragment>
    );
  }
}


export default connect(s => s.categories)(Category);