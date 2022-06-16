// ---Dependencies
import { ReactElement, ReactNode, useEffect, useRef } from 'react';
import { Display } from './Display/Display';

interface Props {
  id: string;
  children?: ReactNode;
}

// -----------------------AUX METHODS
export const justReadRe = function (id: string) {
  try {
    const getCount = localStorage.getItem(`re${id}`);
    const parsedNumber = Number(getCount);
    return parsedNumber || 0;
  } catch (_) {
    return 0;
  }
};
export const justReadFirst = function (id: string) {
  try {
    const getCount = localStorage.getItem(`first${id}`);
    const parsedNumber = Number(getCount);
    return parsedNumber || 0;
  } catch (_) {
    return 0;
  }
};
/**
 * RendersCounter Component: Do something
 * @returns {ReactElement}
 */
export function RendersCounter({ id, children }: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const didMountRef = useRef(false);
  // -----------------------MAIN METHODS
  const incrementCount = function () {
    let reStorageCount = justReadRe(id);
    let firstStorageCount = justReadFirst(id);
    reStorageCount++;
    firstStorageCount++;
    localStorage.setItem(id, reStorageCount.toString(10));
    localStorage.setItem(id, firstStorageCount.toString(10));
  };
  // -----------------------USEEFFECT
  useEffect(() => {
    if (didMountRef.current) {
      incrementCount();
    } else didMountRef.current = true;
  });
  // -----------------------RENDER
  return (
    <div>
      <Display id={id} />
      {children}
    </div>
  );
}
