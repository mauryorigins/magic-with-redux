// --- Dependency´s
import { ReactElement, ReactNode } from 'react';
// ---Custom Hooks
import { useAppListener } from 'GlobalProvider/useAppListener/useAppListener';
// ---Components
import { Footer } from 'GlobalProvider/Footer/Footer';
import { Navbar } from 'GlobalProvider/Navbar/Navbar';

// -----------------------PROPS
interface Props {
  children: ReactNode;
}
/**
 * GlobalProvider Component: Componente que se representa globalmente en la aplicación y
 * persiste en todas las páginas. Puede agregar nuevos componentes aquí para representarlos
 * globalmente para Ex: Barras de herramientas, pies de página, componentes de chat, carritos, etc.
 * @param {Props} - Props of the component
 * @return {ReactElement} ReactElement
 */
export function GlobalProvider({ children }: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  useAppListener();
  // -----------------------RENDER
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
