// ---Dependencys
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import { ShoppingListCont } from 'Pages/ShoppingList/ShoppingListCont/ShoppingListCont';

/**
 * Error404Page Component: este componente es para dar datos al Helmet de
 * la pagina y concatenarlo con el contenedor de la pagina del componente
 * @returns { ReactElement } ReactElement
 */
export function ShoppingListPage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>Forge Template | Error</title>
      </Helmet>
      <ShoppingListCont />
    </>
  );
}
