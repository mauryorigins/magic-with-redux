// ---Dependencys
import { ReactElement, useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';
// --- Redux
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '@Redux/globalReducers';
import { updatePath, updateParams, changeResponsiveFlag } from '@Redux/appInfo/actions';
import { ResponsiveData } from '@Redux/appInfo/customTypes';
// ---Others
import isMovilDetector from 'Others/isMovilDetector';
// ---Containers
// import NavbarCont from 'Cont/Navbar/NavbarCont';
// ---Routes
import Routes from './Routes';

function AppContainer() : ReactElement {
 // Redux States
const { currentPath, currentParams  } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
// Redux Actions
  const dispatchR = useDispatch();
  const updateResponsiveData = (data: ResponsiveData) => dispatchR(changeResponsiveFlag(data));
  const updateCurrentPath = () => dispatchR(updatePath(currentPath));
  const updateCurrentParams = () => dispatchR(updateParams(currentParams));
  
  const responsiveData = isMovilDetector();
  useEffect(() => {
    updateResponsiveData(responsiveData);
  }, [responsiveData]);

  useEffect(() => { updateCurrentPath() }, [currentPath]);
  useEffect(() => { updateCurrentParams() }, [currentParams]);  
  return (
    <BrowserRouter>
      
      <Routes />
    </BrowserRouter>
  );
}

export default AppContainer;
