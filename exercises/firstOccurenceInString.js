// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {numbery}
 */

const strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length + 1 - needle.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.lengt) === needle) return i;
    }
  }
  return -1;
};

// *** *** *** *** *** //

// Knuth-Morris-Pratt (KMP) algorithm

const strStrV2 = function (haystack, needle) {
  if (needle === '') return 0;
  const computeLPS = (pattern) => {
    const lps = new Array(pattern.length).fill(0);
    let len = 0;
    for (let i = 1; i < pattern.length; i++) {
      while (len > 0 && pattern[i] !== pattern[len]) {
        len = lps[len - 1];
      }
      if (pattern[i] === pattern[len]) {
        len++;
      }
      lps[i] = len;
    }
    return lps;
  };
  const lps = computeLPS(needle);
  let i = 0;
  let j = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
      if (j === needle.length) {
        return i - j;
      }
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return -1;
};

