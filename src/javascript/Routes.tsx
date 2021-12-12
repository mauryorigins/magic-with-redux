/* eslint-disable react/jsx-fragments */
// ---Dependencys
import { ReactElement, Fragment, useEffect } from 'react';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
// ---Redux
import { useDispatch } from 'react-redux';
import {
  changeResponsiveFlag,
  updatePath,
  updateParams
} from '@Redux/appInfo/actions';
import { ResponsiveData } from '@Redux/appInfo/customTypes';
// ---Others
import isMovilDetector from 'AppConfig/isMovilDetector';
// ---Pages
import HomePage from 'Pages/HomePage';
import Error404Page from 'Pages/Error404Page';

function Routes(props: RouteComponentProps): ReactElement {
  const { pathname, search: urlParams } = props.location;
  const currentPath = pathname
  const responsiveData = isMovilDetector();
  // Redux Actions
  const dispatch = useDispatch();
  const updateResponsiveData = (data: ResponsiveData) => dispatch(changeResponsiveFlag(data));
  const updateCurrentPath = () => dispatch(updatePath(currentPath));
  const updateCurrentParams = () => dispatch(updateParams(urlParams));  
  useEffect(() => {
    updateResponsiveData(responsiveData);
  }, [responsiveData]);

  useEffect(() => { updateCurrentPath() }, [currentPath]);
  useEffect(() => { updateCurrentParams() }, [urlParams]);
  return(
    <Fragment>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <Error404Page />
        </Route>
      </Switch>
    </Fragment>
  )
}

export default withRouter(Routes);