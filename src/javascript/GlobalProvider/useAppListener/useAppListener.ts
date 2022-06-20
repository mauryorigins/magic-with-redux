import { useRouteListen } from './useRouteListen/useRouteListen';
import { useScreenBreakpoints } from './useScreenBreakpoints/useScreenBreakpoints';

/**
 * useAppListen Hook: Escucha la información general de la aplicación, como
 * el tamaño de pantalla actual o la ruta de ruta y recupera la información para redux
 */
export function useAppListener() {
  useScreenBreakpoints();
  useRouteListen();
}
