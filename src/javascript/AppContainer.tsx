// ---Dependencys
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// ---Containers
import NavbarCont from 'Cont/NavbarCont';
// ---Routes
import Routes from './Routes';

function AppContainer() : React.ReactElement {
  return (
    <BrowserRouter>
      <NavbarCont />
      <Routes />
    </BrowserRouter>
  );
}

export default AppContainer;
