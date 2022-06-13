const { getLessVars } = require('./lessVarsControl');

/**
 * Look for an environment variable by its name and return its value as string
 * @param {string} envName
 * @returns {string} string - Value
 */
exports.getEnv = function getEnv(envName) {
  try {
    return JSON.stringify(process.env[envName]);
  } catch (error) {
    return undefined;
  }
};

exports.envs = {
  names: {
    PORT: 'REACT_APP_PORT',
    API_URL: 'REACT_APP_API_URL',
    APP_NAME: 'REACT_APP_APP_NAME',
    LESS_COLORS: 'REACT_APP_LESS_COLORS',
    DEBUG: 'DEBUG',
  },
  values: {
    common: {
      LESS_COLORS: getLessVars(),
    },
    dev: {
      APP_NAME: 'Development react app',
      DEBUG: 'express:*',
    },
    prod: {
      APP_NAME: 'Production react app',
    },
  },
};
