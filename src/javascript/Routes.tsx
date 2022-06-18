/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-fragments */
// ---Dependencys
import { ReactElement, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
// ---Pages
import { HomePage } from 'Pages/Home/HomePage';
import { Error404Page } from 'Pages/Error404/Error404Page';
// ---Components
import { GlobalProvider } from 'GlobalProvider/GlobalProvider';

/** Render components as routes of the app, is the root of the entire app also,
 * get usefull data as window size of the app, current route and retrive the data to redux  */
export function WrappedRoutes(): ReactElement {
  return (
    <Fragment>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </GlobalProvider>
    </Fragment>
  );
}
