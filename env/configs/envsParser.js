/**
 * Recibe el objeto con todas las envs y parsea todos los valores a string
 * @returns {[s: string]: string} diccionario de strings
 */
exports.envsParser = function (envs) {
  const keys = Object.keys(envs);
  let newEnvs = {};
  keys.forEach((key) => {
    const value = envs[key];
    newEnvs = { ...newEnvs, [`process.env.${key}`]: JSON.stringify(value) };
  });
  return newEnvs;
};
