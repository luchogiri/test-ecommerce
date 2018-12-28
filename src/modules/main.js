
import React, {PureComponent} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {connect} from 'react-redux';

import CategoriesActions from '../actions/categories';

import Header from '../components/header';
import Home from './home';
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
          <Header />
          <section className="ctn main-wrapper">
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </section>
        </React.Fragment>
      </Router>
    );
  }
}

export default connect()(Main)