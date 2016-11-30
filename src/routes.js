import React from 'react';
import { IndexRoute, Route } from 'react-router'

import MainLayout from './layout/MainLayout.js';
import Home from './containers/Home.js';
import Teams from './containers/Teams.js';

const routes = (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={Home}/>
    <Route path="teams" component={Teams}/>
  </Route>
);

export default routes;
