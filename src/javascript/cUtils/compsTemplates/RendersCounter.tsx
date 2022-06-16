// ---Dependencies
import { ReactElement, useEffect, useState } from 'react';

interface Props {
  id: string;
}

/**
 * RendersCounter Component: Do something
 * @returns {ReactElement}
 */
export const RendersCounter = function ({ id }: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const [count, setCount] = useState(justRead());
  useEffect(() => {
    incrementCount();
  }, []);
  // -----------------------MAIN METHODS
  function incrementCount() {
    let storageCount = justRead();
    storageCount++;
    localStorage.setItem(id, storageCount.toString(10));
    setCount(storageCount);
  }

  function clearCount() {
    try {
      localStorage.setItem(id, '0');
      setCount(0);
    } catch (error) {
      setCount(0);
    }
  }
  // -----------------------AUX METHODS
  function justRead() {
    try {
      const getCount = localStorage.getItem(id);
      const parsedNumber = Number(getCount);
      return parsedNumber || 0;
    } catch (_) {
      return 0;
    }
  }
  // -----------------------RENDER
  return (
    <div>
      <p>
        Re-render: <span>{count}</span>
      </p>
      <button type="button" onClick={clearCount}>
        Limpiar
      </button>
    </div>
  );
};
