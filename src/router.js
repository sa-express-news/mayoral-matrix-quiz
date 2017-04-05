import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// components
import App from './components/App/App';
import Quiz from './components/Quiz/Quiz';

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route component={Quiz} path="/"></Route>
    </Route>
  </Router>
);