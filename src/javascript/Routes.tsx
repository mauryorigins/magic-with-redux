/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-fragments */
// ---Dependencys
import { ReactElement, Fragment, useEffect } from 'react';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
// ---Redux
import { useDispatch } from 'react-redux';
import { appInfoActions } from '@Redux/appInfo/actions';
import { ResponsiveData } from '@Redux/appInfo/customTypes';
// ---Others
import { isMovilDetector } from 'AppConfig/isMovilDetector';
// ---Pages
import { HomePage } from 'Pages/Home/HomePage';
import { Error404Page } from 'Pages/Error404/Error404Page';

/** Render components as routes of the app, is the root of the entire app also,
 * get usefull data as window size of the app, current route and retrive the data to redux  */
function Routes({ location }: RouteComponentProps): ReactElement {
  const { pathname, search: urlParams } = location;
  const currentPath = pathname;
  const responsiveData = isMovilDetector();
  // Redux Actions
  const dispatch = useDispatch();
  const updateResponsiveData = (data: ResponsiveData) =>
    dispatch(appInfoActions.updateResponsive(data));
  const updateCurrentPath = () => dispatch(appInfoActions.updatePath(currentPath));
  const updateCurrentParams = () => dispatch(appInfoActions.updateParam(urlParams));
  useEffect(() => {
    updateResponsiveData(responsiveData);
  }, [responsiveData]);

  useEffect(() => {
    updateCurrentPath();
  }, [currentPath]);
  useEffect(() => {
    updateCurrentParams();
  }, [urlParams]);
  return (
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
  );
}

export const WrappedRoutes = withRouter(Routes);
