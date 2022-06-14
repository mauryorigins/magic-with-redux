// ---Dependencys
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
// ---Routes
import Routes from './Routes';
// ---Redux Stuff
import { reduxStorage } from '@Redux/createStorage';
import { Provider } from 'react-redux';

/**
 * Raíz de la aplicación, también deberías agregar Providers aquí
 * @returns {ReactElement} ReactElement
 */
export function AppContainer(): ReactElement {
  return (
    <Provider store={reduxStorage}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
