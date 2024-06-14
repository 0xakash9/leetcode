function maxProfit(prices: number[]): number {
  let leftp = 0;
  let rightp = 1;
  let maxProfit = 0;

  while (leftp < rightp) {
    if (prices[leftp] < prices[rightp]) {
      let profit = prices[rightp] - prices[leftp];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      leftp = rightp;
    }
    rightp += 1;
  }

  return maxProfit;
}

maxProfit([7, 1, 5, 3, 6, 4]);
