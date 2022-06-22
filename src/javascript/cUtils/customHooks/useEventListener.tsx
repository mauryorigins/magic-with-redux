import { ReactElement, RefObject, useEffect, useRef } from 'react';

// See: https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
): void;
function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement,
>(eventName: K, handler: (event: HTMLElementEventMap[K]) => void, element: RefObject<T>): void;

/**
 *
 * @param eventName Use EventListener con la simplicidad de React Hook. Toma como parámetros un nombre de evento, una función de devolución de llamada (controlador) y, opcionalmente, un elemento de referencia. Puede ver los dos ejemplos anteriores usando useRef y un evento basado en ventana importando el componente "Ejemplo".
 * @param handler
 * @param element
 */
function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void,
>(
  eventName: KW | KH,
  handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => void,
  element?: RefObject<T>,
) {
  // Crear una referencia que almacene el controlador
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Definir el objetivo de escucha
    const targetElement: T | Window = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    // Cree un detector de eventos que llame a la función del controlador almacenada en ref
    const eventListener: typeof handler = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener);

    // Eliminar el event listener en la limpieza
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

export default useEventListener;

/**
 * Ejemplo de componente React del uso de useEventListener.
 * @returns {ReactElement}
 */
export function Example(): ReactElement {
  // Definir referencia de botón

  const buttonRef = useRef<HTMLButtonElement>(null);

  const onScroll = (event: Event) => {
    console.log('window scrolled!', event);
  };

  const onClick = (event: Event) => {
    console.log('button clicked!', event);
  };

  // ejemplo con evento basado en ventana

  useEventListener('scroll', onScroll);

  // ejemplo con evento basado en elementos

  useEventListener('click', onClick, buttonRef);

  return (
    <div style={{ minHeight: '200vh' }}>
      <button type="button" ref={buttonRef}>
        Click me
      </button>
    </div>
  );
}
