const prices = [7, 1, 5, 3, 6, 4];

// BRUTE FORCE
// function determineTheBestTime(prices) {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let profit = prices[j] - prices[i];
//       maxProfit = Math.max(maxProfit, profit);
//     }
//   }

//   return maxProfit;
// }

// let bestPrice = determineTheBestTime(prices);
// console.log(bestPrice, "BEST PRICE");

function findTheBestPriceToBuy(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    } else {
      maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    }
  }

  return maxProfit;
}

let bestPriceToBuy = findTheBestPriceToBuy(prices);
console.log(bestPriceToBuy, "BEST PRICE TO BUY");
