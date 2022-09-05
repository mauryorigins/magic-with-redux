// ---Dependencys
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import { CardStorageCont } from 'Pages/CardStorage/CardStorageCont/CardStorageCont';

/**
 * Error404Page Component: este componente es para dar datos al Helmet de
 * la pagina y concatenarlo con el contenedor de la pagina del componente
 * @returns { ReactElement } ReactElement
 */
export function CardStoragePage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>Forge Template | Error</title>
      </Helmet>
      <CardStorageCont />
    </>
  );
}
