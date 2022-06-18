// ---Dependency´s
import React from 'react';
// ---Components
import { Titulo } from 'Pages/Error404/Error404Cont/Titulo/Titulo';
import { Cuerpo } from 'Pages/Error404/Error404Cont/Cuerpo/Cuerpo';

/**
 * Componente Error404Cont: Donde se mostrarán la pagina de error en caso de uno
 * @returns {ReactElement} ReactElement
 */
export function Error404Cont(): React.ReactElement {
  return (
    <div className="Error404Cont">
      <Titulo />
      <Cuerpo />
    </div>
  );
}
