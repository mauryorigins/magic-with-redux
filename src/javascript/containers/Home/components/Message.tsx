// ---Dependencys
import { FullReduxState } from '@Redux/globalReducers';
import { Progress } from 'antd';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

// ------------------------------------------ COMPONENT-----------------------------------------
/**
 * Si pude
 * @returns {}
 */
export function Message(): ReactElement {
  const { lessColors } = useSelector((s: FullReduxState) => s.appInfoReducer);
  const appName = process?.env?.REACT_APP_APP_NAME;
  const { primary, secondary } = lessColors;
  return (
    <>
      <h3>{appName}</h3>
      <p>
        Goodbye &nbsp;
        <span>World2</span>
      </p>
      <Progress
        strokeColor={{
          from: primary!,
          to: secondary!,
        }}
        percent={67}
        status="active"
      />
    </>
  );
}
