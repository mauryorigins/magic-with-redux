/**
 * Generates a random string of the indicated length
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
 * Generates a random string of the indicated length with the indicated list of characters given in a string
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
 * Returns a random word from a given array of words
 * @param {string[]} words array of strings (words)
 * @returns {string}
 */
function randomWord(words: string[]): string {
  return words[Math.floor(Math.random() * words.length)];
}

/**
 * Generates a random and unique string
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
  randomStringCustom
};
