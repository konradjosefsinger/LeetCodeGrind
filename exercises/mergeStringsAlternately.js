/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

const mergeAlternatelyV1 = function (word1, word2) {
  const result = [];
  const word1Arr = word1.split('');
  const word2Arr = word2.split('');
  while (word1Arr.length || word2Arr.length) {
    if (word1Arr.length) {
      result.push(word1Arr.shift());
    };
    if (word2Arr.length) {
      result.push(word2Arr.shift());
    };
  };
  return result.join('');
};

const mergeAlternatelyV2 = function (word1, word2) {
  let result = '';
  let maxLength = Math.max(word1.length, word2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      result += word1.charAt(i);
    }
    if (i < word2.length) {
      result += word2.charAt(i);
    }
  }
  return result;
};

