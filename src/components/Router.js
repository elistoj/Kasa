// src/components/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Listing from '../pages/Listing';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/listings" component={Listing} />
      <Route path="/details/:id" component={Details} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
