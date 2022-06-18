import { useRouteListen } from './useRouteListen/useRouteListen';
import { useScreenBreakpoints } from './useScreenBreakpoints/useScreenBreakpoints';

/**
 * useAppListen Hook: Listen app general information such as
 * the current screen size or route path and retrives the info to redux
 */
export function useAppListener() {
  useScreenBreakpoints();
  useRouteListen();
}
