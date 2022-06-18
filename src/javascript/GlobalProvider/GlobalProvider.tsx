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
 * GlobalProvider Component: Component that renders globally in the app and
 * persist in all the pages. You can add new components here to render them globally for Ex:
 * Toolbars, Footers, Chat components, Carts, etc.
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
