const path = require('path');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');

/**
 * Read the variables from /src/css/colors.less and return them as a stringified object
 * @returns {string} string
 */
exports.getLessVars = function getLessVars() {
  try {
    const colorsFile = fs.readFileSync(path.join(__dirname, '../src/css/colors.less'), 'utf8');
    const themeVariables = JSON.stringify(lessToJs(colorsFile));
    return themeVariables;
  } catch (error) {
    const message = error?.message;
    console.log('Error loading less variables: \n', message || error);
    return '';
  }
};
