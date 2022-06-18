// ---Dependencys
import { ReactElement } from 'react';
// ---Utils
import { generate } from 'Utils/functions/valueGenerators';

/**
 * HelloWorld Component : Componente simple que despliega un mensaje,
 * el environment en el que se esta trabajando y un string unico util para keys
 * @returns {ReactElement} ReactElement
 */
export function HelloWorld(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const appName = process?.env?.REACT_APP_APP_NAME;
  // -----------------------RENDER
  return (
    <>
      <h3>{appName}</h3>
      <p>
        Goodbye &nbsp;
        <span>World2</span>
      </p>
      <p>{`Unique: ${generate.uniqueString()}`}</p>
    </>
  );
}
