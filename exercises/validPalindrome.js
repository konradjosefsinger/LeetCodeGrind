/**
 * @param {string} single
 * @return {boolean}
 */

let s = "A man, a plan, a canal: Panama";

const isPalindromeV1 = function(s) {
  let sClean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (sClean === sClean.split('').reverse().join('')) return true;
  else return false;
};

console.log(isPalindromeV1(s));

const isPalindromeV2 = function(s) {
  let sClean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let i = 0;
  let j = sClean.length - 1;
  while (i < j) {
    if (sClean[i] !== sClean[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(isPalindromeV2(s));
