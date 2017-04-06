import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import App from './components/App/App';
import Quiz from './components/Quiz/Quiz';

export default (
  <BrowserRouter>
    <App>
        <Route exact={true} component={Quiz} path="/"></Route>
    </App>
  </BrowserRouter>
);