/**
 * @param {string} str
 * @return {number}
 */

const longestPalindromeV1 = function(str) {
  const count = {};
  for (let i = 0; i< str.length; i++) {
    if (!count[str[i]]) {
      count[str[i]] = 1;
    } else {
      count[str[i]]++;
    }
  }
  let length = 0;
  let hasOdd = false;
  for (const key in count) {
    if (count[key] % 2 === 0) {
      length += count[key];
    } else {
      length += count[key] - 1;
      hasOdd = true;
    }
  }
  if (hasOdd) {
    length++;
  }
  return length;
};

// *** *** *** *** *** //

const longestPalindromeV2 = function (s) {
  const count = new Map();
  for (let char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  };
  let result = 0;
  let oddFound = false;
  for (let charCount of count.values()) {
    if (charCount % 2 === 0) {
      result += charCount;
    } else {
      result += charCount - 1;
      oddFound = true;
    }
  }
  return oddFound ? result + 1 : result;
};
