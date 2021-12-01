// ---Dependencys
import React, {ReactElement} from 'react';
import { Route, Switch } from 'react-router-dom';
// ---Pages
import HomePage from 'Pages/HomePage';
import Error404Page from 'Pages/Error404Page';

export default function Routes(): ReactElement {
  return(
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="*" component={Error404Page} />
      </Switch>
    </>
  )
}