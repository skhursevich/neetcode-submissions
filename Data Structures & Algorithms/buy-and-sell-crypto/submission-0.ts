class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            const curProfit = prices[i] - minPrice;
            maxProfit = curProfit > maxProfit ? curProfit : maxProfit;
            minPrice = prices[i] < minPrice ? prices[i] : minPrice;
        }

        return maxProfit;
    }
}
