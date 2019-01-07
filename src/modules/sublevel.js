
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import * as Query from '../helpers/query';
import CategoriesActions from '../actions/categories';
import Products from './products';
import Sublevels from "../components/sublevels";
import Order, {OrderMethod} from './order';
import Filter, {FilterMethod} from './filter';

import './sublevel.scss';

class Sublevel extends PureComponent {

  state = {
    term : ''
  };

  componentDidMount() {
    this.SetSublevel();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location)
      this.SetSublevel();
  }

  SetSublevel = () => {
    window.scrollTo(0, 0);
    const {params = {}} = this.props.match;
    this.props.dispatch( CategoriesActions.SetSublevel( params ));
  };

  onChangeTerm = i => {
    this.setState({ term: i.target.value });
  };

  applyFilters = query => item => {
    let result = true;
    if (this.state.term)
      result = (new RegExp(this.state.term.toLowerCase())).test(item.name.toLowerCase());
    if (result)
      result = FilterMethod(query)(item);
    return result;
  };

  render() {
    const {items = [], selected, sub} = this.props;
    const category = items.find(c => c.id === selected) || {};
    const tree = CategoriesActions.FindSublevel( category, sub );
    const query = Query.Parse(this.props.location.search);
    const order = OrderMethod[query.order];
    const filter = this.applyFilters(query);
    const cat = Array.isArray(tree) ? tree[tree.length-1] : category;

    return (
      <section className="category-wrapper">

        <aside className="category-side">
          {cat && cat.sublevels &&
          <Sublevels
            category={cat}
            match={this.props.match} />}

          {cat && !cat.sublevels &&
            <input
              className="category-search"
              type="text"
              value={this.state.term}
              onChange={this.onChangeTerm}
              placeholder="Buscar producto..."
            />
          }

          <Order {...this.props} />
          <Filter {...this.props} />
        </aside>

        <section className="category-items">
          <Products
            title="Productos"
            filter={i => sub === i.sublevel_id}
            subfilter={filter}
            sort={order}
          />
        </section>
      </section>
    );
  }
}


export default connect(s => s.categories)(Sublevel);