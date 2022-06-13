// --- Dependency´s
import { ReactElement, ReactNode } from 'react';
// ---Components
// ---Custom Hooks
// import { useAppListen } from 'AppConfig/appListenHook/useAppListen';

// -----------------------PROPS
interface Props {
  children: ReactNode;
}
/**
 * GlobalComponents Component: Component that renders globally in the app and
 * persist in all the pages. You can add new components here to render them globally for Ex:
 * Toolbars, Footers, Chat components, Carts, etc.
 * @param {Props} - Props of the component
 * @return {ReactElement} ReactElement
 */
export function GlobalComponents({ children }: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  // useAppListen();
  // -----------------------RENDER
  return (
    <>
      {children}
    </>
  );
}
