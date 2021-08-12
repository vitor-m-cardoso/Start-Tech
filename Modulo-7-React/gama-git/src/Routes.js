import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Repositories from './components/Repositories';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/repositories" component={ Repositories } />
      </Switch>
    </BrowserRouter>
  )
}