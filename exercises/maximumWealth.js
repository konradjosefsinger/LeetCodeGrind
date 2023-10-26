/**
 * *
 * @param {number[][]} acocunts
 * @return {number}
 */

export const maximumWealth = function(accounts) {
  let result = [];
  for (let i=0; i<accounts.length; i++) {
    result.push(accounts[i].reduce((a,b)=>a+b));
  }
  return Math.max(...result);
};