// ---Dependencys
import { FullReduxState } from '@Redux/globalReducers';
import { Progress } from 'antd';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

/**
 * Componente Tests : En este componete se pueden hacer pruebas de cualquier tipo
 * para ver como se ejecuta el componete a prueba
 * @returns {ReactElement} ReactElement
 */
export function Tests(): ReactElement {
  const { lessColors } = useSelector((s: FullReduxState) => s.appInfoReducer);
  const appName = process?.env?.REACT_APP_APP_NAME;
  return (
    <>
      <h3>{appName}</h3>
      <p>
        Goodbye &nbsp;
        <span>World2</span>
      </p>
      <Progress
        strokeColor={{
          from: lessColors?.primary!,
          to: lessColors?.secondary!,
        }}
        percent={67}
        status="active"
      />
    </>
  );
}
