// ---Dependencys
import { ReactElement } from 'react';
import { BrowserRouter} from 'react-router-dom';
// ---Containers
import NavbarCont from 'Cont/Navbar/NavbarCont';
// ---Routes
import Routes from './Routes';

function AppContainer() : ReactElement {
  
  return (
    <BrowserRouter>
      
      <Routes />
    </BrowserRouter>
  );
}

export default AppContainer;
