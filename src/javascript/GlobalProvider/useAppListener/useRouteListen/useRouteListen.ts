// ---Dependencies
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// ---Redux
import { appInfoActions } from '@Redux/appInfo/actions';
import { useDispatch, useSelector } from 'react-redux';
import { FullReduxState } from '@Redux/globalReducers';

/** Hook para escuchar y capturar la ruta actual y los parámetros de la aplicación */
export function useRouteListen() {
  const dispatch = useDispatch();
  const { currentParams } = useSelector((s: FullReduxState) => s.appInfoReducer);
  const { pathname, search: urlParams } = useLocation();
  useEffect(() => {
    dispatch(appInfoActions.updatePath(pathname));
  }, [pathname]);
  useEffect(() => {
    const justParams = urlParams.split('?')[1];
    if (currentParams !== justParams) {
      dispatch(appInfoActions.updateParam(justParams));
    }
  }, [urlParams]);
}
