import { useEffect, useLayoutEffect } from 'react';

/**
 * Switch between useEffect and useLayoutEffect following the execution environment,
 * fixing the issue of useEffect not being executed in the server side correctly.
 * @returns {(effect: React.EffectCallback, deps?: React.DependencyList | undefined) => void}
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
