/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let charMap = {};
  for (let i = 0; i < s.length; i++) {
    charMap[s[i]] = (charMap[s[i]] || 0) + 1;
  };
  for (let i = 0; i < t.length; i++) {
    if (charMap[t[i]]) {
      charMap[t[i]]--;
    };
    if (charMap[t[i]] === 0) {
      delete charMap[t[i]];
    };
  };
  return Object.keys(charMap).length === 0;
};
