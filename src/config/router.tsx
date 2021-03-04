import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from '../Pages/AboutUs';
import Blog from '../Pages/Blog';
import Home from '../Pages/Home';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/blog" component={Blog} />
    </Switch>
  );
}

export default Routes;
