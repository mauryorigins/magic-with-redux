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
