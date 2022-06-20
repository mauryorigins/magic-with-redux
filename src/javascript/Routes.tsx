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

/**
 * WrappedRoutes Component: Representar componentes como rutas de la aplicación, también es la raíz de toda la aplicación,
 * Obtenga datos útiles como el tamaño de la ventana de la aplicación, la ruta actual y recupere los datos para redux
 * @returns {ReactElement} ReactElement
 */
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
