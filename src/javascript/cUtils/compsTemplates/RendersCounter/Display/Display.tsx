// ---Dependencies
import { ReactElement, useState } from 'react';
import { justReadFirst, justReadRe } from '../RendersCounter';

interface Props {
  id: string;
}

/**
 * Display Component: Do something
 * @returns {ReactElement} ReactElement
 */
export function Display({ id }: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const [re, setRe] = useState(justReadRe(id));
  const [first, setFirst] = useState(justReadFirst(id));
  // -----------------------MAIN METHODS
  const clearCount = function () {
    try {
      localStorage.setItem(`first${id}`, '0');
      localStorage.setItem(`re${id}`, '0');
      setRe(justReadRe('0'));
      setFirst(justReadFirst('0'));
    } catch (error) {
      setRe(justReadRe('0'));
      setFirst(justReadFirst('0'));
    }
  };
  const updateCounts = function () {
    setRe(justReadRe(id));
    setFirst(justReadFirst(id));
  };
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
