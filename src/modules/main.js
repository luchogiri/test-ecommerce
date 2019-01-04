
import React, {PureComponent} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {connect} from 'react-redux';

import CategoriesActions from '../actions/categories';

import Head from './head';
import Home from './home';
import Category from './category';
import Sublevel from './sublevel';

import './main.scss';


class Main extends PureComponent {

  history = createHistory();

  componentDidMount() {
    this.props.dispatch( CategoriesActions.Retrieve() );
  }

  render() {
    return (
      <Router history={this.history}>
        <React.Fragment>
          <Head />
          <section className="ctn main-wrapper">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/:category" exact component={Category} />
              <Route path="/:category/:sublevel" exact component={Sublevel} />
              <Route path="/:category/:r(.*)/:sublevel" exact component={Sublevel} />
            </Switch>
          </section>
        </React.Fragment>
      </Router>
    );
  }
}

export default connect()(Main)