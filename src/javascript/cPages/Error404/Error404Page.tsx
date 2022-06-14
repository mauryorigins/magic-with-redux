// ---Dependencys
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import { Error404Cont } from 'Pages/Error404/Error404Cont/Error404Cont';

/**
 * Error404Page Component: este componente es para dar datos al Helmet de
 * la pagina y concatenarlo con el contenedor de la pagina del componente
 * @returns { ReactElement } ReactElement
 */
export function Error404Page(): ReactElement {
  return (
    <>
      <Helmet>
        <title>Forge Template | Error</title>
      </Helmet>
      <Error404Cont />
    </>
  );
}
