/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function(prices) {
  let result = 0;
  let minValue = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minValue) {
      minValue = prices[i]
    };
    let diff = prices[i] - minValue;
    if (diff > result) {
      result = diff;
    };
  };
  return result;
};
