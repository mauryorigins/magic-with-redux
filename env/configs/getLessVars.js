const path = require('path');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');

/**
 * Lee las variables less desde "/src/css/colors.less" y las retorna como un objeto "stringify"
 * @returns {string} string
 */
exports.getLessVars = function () {
  try {
    const colorsFile = fs.readFileSync(path.join(__dirname, '../../src/css/colors.less'), 'utf8');
    const themeVariables = JSON.stringify(lessToJs(colorsFile));
    return themeVariables;
  } catch (error) {
    const message = error?.message;
    console.log('Error loading less variables: \n', message || error);
    return '';
  }
};
