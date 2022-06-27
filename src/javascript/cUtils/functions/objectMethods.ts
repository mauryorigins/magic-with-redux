import { RandObj } from '@Declarations';

/**
 * Recibe un objeto y un array con nombres, retorna un nuevo objeto sin las propiedades que coincidan con el array de nombres
 * @param {RandObj} RandObj someObj: Objeto con propiedades
 * @param {string[]} string[] args: Array de nombres a ignorar
 * @returns {RandObj} RandObj
 */
export function ignoreProperties(someObj: RandObj, args: string[]): RandObj {
  const keys = Object.keys(someObj);
  let newData = {};

  keys.forEach((propKey) => {
    args.forEach((propToIgnore) => {
      if (propKey !== propToIgnore) {
        newData = { ...newData, [propKey]: someObj[propKey] };
      }
    });
  });
  return newData;
}

/**
 * Recibe un objeto y un string, retorna un nuevo objeto sin las propiedades con nombres que tengan el string como prefijo o sufijo
 * @param {string} string - prefix: Prefijo o sufijo a ignorar
 * @param {RandObj} RandObj someObj: Objeto con propiedades
 * @returns {RandObj} RandObj
 */
export function removePropsWithPrefix<T>(prefix: string, obj: T) {
  let cleanObj = {};
  const allKeys = Object.keys(obj);
  allKeys.forEach((currentKey) => {
    let currentValue = (obj as unknown as RandObj)[currentKey];
    const doNotIgnore = !currentKey.includes(prefix);
    const isObject =
      typeof currentValue === 'object' && !Array.isArray(currentValue) && currentValue !== null;
    if (doNotIgnore && isObject) {
      currentValue = removePropsWithPrefix(prefix, currentValue);
    }
    if (doNotIgnore) {
      cleanObj = { ...cleanObj, [currentKey]: currentValue };
    }
  });
  return cleanObj;
}

/**
 * Recibe 2 objetos con las mismas props y un string, retorna un nuevo objeto con sus propiedades originales pero las propiedades con nombres que tengan el string como prefijo o sufijo se sustituiran por propiedades del segundo objeto "objFallBack"
 * @param {string} string - prefix: Prefijo o sufijo a ignorar
 * @param {RandObj} RandObj obj: Objeto con propiedades
 * @param {RandObj} RandObj objFallBack: Objeto con propiedades
 * @returns {RandObj} RandObj
 */
export function mergePropsWithPrefix<T>(prefix: string, obj: T, objFallBack: T) {
  let cleanObj = {};
  const allKeys = Object.keys(obj);
  allKeys.forEach((currentKey) => {
    let currentValue = (obj as unknown as RandObj)[currentKey];
    const mirrorValue = (objFallBack as unknown as RandObj)[currentKey];
    const doNotIgnore = !currentKey.includes(prefix);
    const isObject =
      typeof currentValue === 'object' && !Array.isArray(currentValue) && currentValue !== null;
    if (isObject) {
      currentValue = mergePropsWithPrefix(prefix, currentValue, mirrorValue);
    }
    if (doNotIgnore) {
      cleanObj = { ...cleanObj, [currentKey]: currentValue };
    } else {
      cleanObj = { ...cleanObj, [currentKey]: mirrorValue };
    }
  });
  return cleanObj;
}
