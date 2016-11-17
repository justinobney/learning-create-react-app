import React from 'react';
import { IndexRoute, Route } from 'react-router'
import { Container, Segment } from 'semantic-ui-react'

import MainLayout from './layout/MainLayout.js';
import Home from './containers/Home.js';

const Bar = () => (
  <Container className="main">
    <Segment>
      <p>Bar</p>
    </Segment>
  </Container>
);

const routes = (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={Home}/>
    <Route path="bar" component={Bar}/>
  </Route>
);

export default routes;
