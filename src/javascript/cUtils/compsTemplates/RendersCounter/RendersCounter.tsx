// ---Dependencies
import { ReactElement, ReactNode, useEffect, useRef } from 'react';
import { Display } from './Display/Display';

interface Props {
  id: string;
  children?: ReactNode;
}

// -----------------------AUX METHODS
export const justReadRe = function (id: string): number {
  try {
    const getCount = localStorage.getItem(`re${id}`);
    const parsedNumber = Number(getCount);
    return parsedNumber || 0;
  } catch (_) {
    return 0;
  }
};
export const justReadFirst = function (id: string): number {
  try {
    const getCount = localStorage.getItem(`first${id}`);
    const parsedNumber = Number(getCount);
    return parsedNumber || 0;
  } catch (_) {
    return 0;
  }
};
/**
 * RendersCounter Component: Contador de Renders
 * @returns {ReactElement} ReactElement
 */
export function RendersCounter({ id, children }: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const didMountRef = useRef(false);
  // -----------------------MAIN METHODS
  const incrementReCount = function () {
    let reStorageCount = justReadRe(id);
    reStorageCount++;
    localStorage.setItem(`first${id}`, reStorageCount.toString(10));
  };
  const incrementFirstCount = function () {
    let firstStorageCount = justReadFirst(id);
    firstStorageCount++;
    localStorage.setItem(`first${id}`, firstStorageCount.toString(10));
  };
  // -----------------------USEEFFECT
  useEffect(() => {
    if (didMountRef.current) {
      incrementReCount();
    } else {
      didMountRef.current = true;
      incrementFirstCount();
    }
  });
  // -----------------------RENDER
  return (
    <div>
      <Display id={id} />
      {children}
    </div>
  );
}
