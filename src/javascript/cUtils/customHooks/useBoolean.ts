import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface ReturnType {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}
/**
 * A simple abstraction to play with a boolean, have common operations and control the bollean state.
 * @param {boolean} boolean - defaultValue: Initial value of the boolean.
 * @returns {ReturnType} ReturnType - Object with the following properties:
 * - value - The current value of the boolean.
 * - setValue: - A function to change the value of the boolean by the param recived.
 * - setTrue: - A function to set the boolean to true.
 * - setFalse: - A function to set the boolean to false.
 * - toggle: - A function to toggle the boolean.
 */
export function useBoolean(defaultValue?: boolean): ReturnType {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { value, setValue, setTrue, setFalse, toggle };
}
