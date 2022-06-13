// ---Redux
import { FullReduxState } from '@Redux/globalReducers';
import { useSelector } from 'react-redux';

/**
 * Get an id or any number from the url and returns it as a number.
 * Example: http://example.com/route?23 retrives 23 as number
 * @returns {numbrer}
 */
export function useListenNumParam(): number {
  const { currentParams } = useSelector((s: FullReduxState) => s.appInfoReducer);
  const id = Number(currentParams?.substring(1, currentParams?.length));
  return id;
}
