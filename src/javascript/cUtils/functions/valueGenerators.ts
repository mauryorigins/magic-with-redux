/**
 * Genera una cadena aleatoria de la longitud indicada
 * @param {number} length Length of the randomString
 * @returns {string}
 */
function randomString(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Genera una cadena aleatoria de la longitud indicada con la lista indicada de caracteres dados en una cadena
 * @param {number} length Length of the randomString
 * @param {string} characters list of characters
 * @returns {string}
 */
function randomStringCustom(length: number, characters: string): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Devuelve una palabra aleatoria de una matriz dada de palabras
 * @param {string[]} words array of strings (words)
 * @returns {string}
 */
function randomWord(words: string[]): string {
  return words[Math.floor(Math.random() * words.length)];
}

/**
 * Genera una cadena aleatoria y única.
 * @returns {string} a unique string
 */
function uniqueString(): string {
  const uniqueKey = new Date().getDate();
  const randStr = randomString(4);
  return randStr + uniqueKey;
}

export const generate = {
  randomString,
  uniqueString,
  randomWord,
  randomStringCustom,
};
