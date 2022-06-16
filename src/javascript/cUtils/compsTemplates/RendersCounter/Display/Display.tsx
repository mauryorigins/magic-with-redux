// ---Dependencies
import { ReactElement, useState } from 'react';
import { justReadFirst, justReadRe } from '../RendersCounter';

interface Props {
  id: string;
}

/**
 * Display Component: Do something
 * @returns {ReactElement}
 */
export function Display({ id }: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const [re, setRe] = useState(justReadRe(id));
  const [first, setFirst] = useState(justReadFirst(id));
  // -----------------------MAIN METHODS
  const clearCount = function () {
    try {
      localStorage.setItem(id, '0');
    } catch (error) {
      console.error(error);
    }
  };
  const updateCounts = function () {
    setRe(justReadRe(id));
    setFirst(justReadFirst(id));
  };
  // -----------------------USEEFFECT
  // -----------------------RENDER
  return (
    <div>
      <p>
        First-render: <span>{first}</span>
      </p>
      <p>
        Re-render: <span>{re}</span>
      </p>
      <button type="button" onClick={clearCount}>
        Limpiar
      </button>
      <button type="button" onClick={updateCounts}>
        actualizar cuenta
      </button>
    </div>
  );
}
