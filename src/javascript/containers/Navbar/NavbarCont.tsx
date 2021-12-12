// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import GlobalComponents from 'Cont/Navbar/components/GlobalComponents';
import ClientMenu from 'Cont/Navbar/components/ClientMenu';
// ---Others
import logo from 'Images/logoStoreL.png';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function NavbarCont ():ReactElement {

  return (
    <>
      <ClientMenu currentPath={currentPath} isMovil={isMovil} logo={logo} />
      <GlobalComponents />
    </>
  );
});
