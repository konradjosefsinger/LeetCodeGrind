/**
 * @param {string} str
 * @return {boolean}
 */

function validParentheses (str) {
  const stack = [];

  for (let elem of str) {
    if ( elem === '(' || elem === '[' || elem === '{' ) {
      stack.push(elem);
    } else if ( elem === ')' && stack[stack.length -1] === '(') {
      stack.pop();
    } else if ( elem === ']' && stack[stack.length -1] === '[') {
      stack.pop();
    } else if ( elem === '}' && stack[stack.length -1] === '{') {
      stack.pop();
    } else {
      return false;
    };
  }
  return stack.length === 0;
}

console.log(validParentheses('()(){[}}'));
console.log(validParentheses('()[]{[()]}'));


// var isValid = function(s) {
//   const stack = [];
//   for (let i = 0; i < s.length; i++) {
//       if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
//           stack.push(s[i]);
//       } else if (
//           (s[i] === ')' && stack[stack.length - 1] === '(') ||
//           (s[i] === ']' && stack[stack.length - 1] === '[') ||
//           (s[i] === '}' && stack[stack.length - 1] === '{')
//       ) {
//           stack.pop();
//       } else return false;
//   };
//   return stack.length === 0;
// };

