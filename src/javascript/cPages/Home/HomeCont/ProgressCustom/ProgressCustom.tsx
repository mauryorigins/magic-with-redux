// ---Dependencies
import { ReactElement } from 'react';
// ---UI Dependencies
import { Progress } from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
import { FullReduxState } from '@Redux/globalReducers';

/**
 * ProgressCustom Component: Revisa los colores en redux y personaliza la barra de progreso
 * @returns {ReactElement} ReactElement
 */
export function ProgressCustom(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const { lessColors } = useSelector((s: FullReduxState) => s.appInfoReducer);
  // -----------------------RENDER
  return (
    <Progress
      strokeColor={{
        from: lessColors?.primary!,
        to: lessColors?.secondary!,
      }}
      percent={67}
      status="active"
    />
  );
}
