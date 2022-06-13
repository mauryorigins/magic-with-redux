// ---Dependencys
import { ReactElement, } from 'react';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function Message(): ReactElement {
  const appName = process?.env?.REACT_APP_APP_NAME;
  return (
    <>
      <h3>{appName}</h3>
      <p>
        Goodbye &nbsp;
        <span>World2</span>
      </p>
    </>
  );
}
