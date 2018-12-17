// @flow

import React, {PureComponent} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';


export default class Main extends PureComponent {

  history = createHistory();

  render() {
    return (
      <Router history={this.history}>
        <React.Fragment>
          <div>El Baratón</div>
          <Switch>
            <Route path="/" component={() => <div>home</div>} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}