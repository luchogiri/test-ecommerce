
import React, {PureComponent} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from '../components/header';
import Home from './home';
import './main.scss';


export default class Main extends PureComponent {

  history = createHistory();

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