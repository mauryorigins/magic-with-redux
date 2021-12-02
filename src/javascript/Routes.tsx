// ---Dependencys
import React, {ReactElement} from 'react';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
// ---Pages
import HomePage from 'Pages/HomePage';
import Error404Page from 'Pages/Error404Page';

function Routes(props: RouteComponentProps): ReactElement {
  const { pathname, search: urlParams } = props.location;
  const currentPath = pathname
  console.log('Router pathname: ', pathname);
  console.log('Router urlParams: ', urlParams);
  
  return(
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="*" component={Error404Page} />
      </Switch>
    </>
  )
}

export default withRouter(Routes);