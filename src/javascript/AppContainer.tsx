// ---Dependencys
import { ReactElement } from 'react';
import { BrowserRouter} from 'react-router-dom';
// ---Routes
import Routes from './Routes';

export default function AppContainer() : ReactElement {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
