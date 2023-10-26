/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function(prices) {
  if (!prices || prices.length <= 1) return 0;
  let minPrice = prices[0];
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    let potentialProfit = prices[i] - minPrice;
    result = Math.max(result, potentialProfit);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return result;
};

console.log(maxProfit([7,1,2,3,6,4,3]))