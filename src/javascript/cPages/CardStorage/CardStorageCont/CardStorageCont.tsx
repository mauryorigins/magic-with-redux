// ---Dependencies
import { ReactElement } from 'react';
// ---UI Dependencies
// ---Custom Hooks
// ---Redux
import { FullReduxState } from '@Redux/globalReducers';
import { useSelector } from 'react-redux';
// ---Components
import { CardStorage } from 'Pages/CardStorage/CardStorageCont/CardStorage';
// ---AppConfig
// ---Assets
// ---Utils
// ---Requests
// ---Others

/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function CardStorageCont(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const { storageArray } = useSelector((s: FullReduxState) => s.cardInfoReducer);
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return <CardStorage currentArray={storageArray} />;
}
