import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import Store from './reducers/store';
import Main from './modules/main';

class Application extends Component {

  render() {
    return (
      <Provider store={Store()}>
        <Main />
      </Provider>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('root'));
