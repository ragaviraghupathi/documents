import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import CommunityPage from './community/CommunityPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="login" component={LoginPage} />
    <Route path="register" component={RegisterPage} />
    <Route path="home" component={HomePage} />
    <Route path="community" component={CommunityPage} />
  </Route>
);