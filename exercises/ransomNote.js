/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  const charCount = {};
  for (let i = 0; i < ransomNote.length; i++) {
    charCount[ransomNote[i]] = (charCount[ransomNote[i]] || 0) + 1;
  };
  for (let i = 0; i < magazine.length; i++) {
    if (charCount[magazine[i]]) {
      charCount[magazine[i]]--;
    };
    if (charCount[magazine[i]] === 0) {
      delete charCount[magazine[i]];
    }
  };
  return Object.keys(charCount).length === 0;
};