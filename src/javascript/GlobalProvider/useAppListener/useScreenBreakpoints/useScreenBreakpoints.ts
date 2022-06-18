// ---Dependencies
import { useEffect } from 'react';
// ---Utils
import { useWindowSize } from 'Utils/customHooks/useWindowSize';
// ---Redux
import { ResponsiveData } from '@Redux/appInfo/customTypes';
import { appInfoActions } from '@Redux/appInfo/actions';
import { useDispatch, useSelector } from 'react-redux';
import { FullReduxState } from '@Redux/globalReducers';

/**
 * Hook to update the screen Breakpoints in redux with the current window size using a ResponsiveData object with props "isMovil" and "winSize"
 */
export function useScreenBreakpoints() {
  const dispatch = useDispatch();
  const { winSize } = useSelector((s: FullReduxState) => s.appInfoReducer);
  const { width } = useWindowSize();
  useEffect(() => updateScreen(), [width]);

  /** Calulate the breakpoints of the screen and returns a ResponsiveData object with props "isMovil" and "winSize"
   * @returns {ResponsiveData}
   */
  function getScreen(): ResponsiveData {
    const caseXS = width < 576;
    const caseSM = width > 576 && width < 768;
    const caseMD = width > 768 && width < 992;
    const caseLG = width > 992 && width < 1200;
    const caseXL = width > 1200 && width < 1600;
    const caseXXL = width > 1600;
    if (caseXS) return { isMovil: true, winSize: 'xs' };
    if (caseSM) return { isMovil: true, winSize: 'sm' };
    if (caseMD) return { isMovil: false, winSize: 'md' };
    if (caseLG) return { isMovil: false, winSize: 'lg' };
    if (caseXL) return { isMovil: false, winSize: 'xl' };
    if (caseXXL) return { isMovil: false, winSize: 'xxl' };
    return { isMovil: false, winSize: 'lg' };
  }
  /** Update the screen Breakpoints in redux */
  function updateScreen() {
    const newSize = getScreen();
    if (newSize.winSize !== winSize) {
      dispatch(appInfoActions.updateResponsive(newSize));
    }
  }
}
