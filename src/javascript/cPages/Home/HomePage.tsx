// ---Dependencys
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import { HomeCont } from 'Pages/Home/HomeCont/HomeCont';

/**
 * Componente HomePage: este componente es para dar datos al Helmet de
 * la página y concatenarla con el contenedor de la página componente
 * @returns { ReactElement } ReactElement
 */
export function HomePage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>Forge Template | Inicio</title>
      </Helmet>
      <HomeCont />
    </>
  );
}
