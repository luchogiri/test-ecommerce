
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import CategoriesActions from '../actions/categories';
import Sublevels from "../components/sublevels";
import './sublevel.scss';

class Sublevel extends PureComponent {

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

  render() {
    const {items = [], selected, sub} = this.props;
    const category = items.find(c => c.id === selected) || {};
    const tree = CategoriesActions.FindSublevel( category, sub );

    return (
      <React.Fragment>

        <aside className="category-side">
          <Sublevels
            category={Array.isArray(tree) ? tree[tree.length-1]:category}
            match={this.props.match} />
        </aside>

        <section className="category-items">
          <h3 className="category-side__title">Productos</h3>
        </section>

      </React.Fragment>
    );
  }
}


export default connect(s => s.categories)(Sublevel);