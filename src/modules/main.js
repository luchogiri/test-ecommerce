
import React, {PureComponent} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {connect} from 'react-redux';

import CategoriesActions from '../actions/categories';
import ProductsActions from '../actions/products';

import Head from './head';
import Cart from './cart';
import Home from './home';
import Checkout from './checkout';
import Resume from './resume';
import Category from './category';
import Sublevel from './sublevel';

import './main.scss';


class Main extends PureComponent {

  history = createHistory();

  componentDidMount() {
    this.props.dispatch( CategoriesActions.Retrieve() );
    this.props.dispatch( ProductsActions.Retrieve() );
  }

  render() {
    return (
      <Router history={this.history}>
        <React.Fragment>
          <Head />
          <section className="ctn main-wrapper">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/checkout" exact component={Checkout} />
              <Route path="/resume" exact component={Resume} />
              <Route path="/:category" exact component={Category} />
              <Route path="/:category/:sublevel" exact component={Sublevel} />
              <Route path="/:category/:r(.*)/:sublevel" exact component={Sublevel} />
            </Switch>
          </section>

          <Cart />

          <footer className="main-footer">test e-commerce • made with <span role="img" aria-label="coffee">☕️</span></footer>
        </React.Fragment>
      </Router>
    );
  }
}

export default connect()(Main)