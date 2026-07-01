class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const res: number[] = []
        const obj: { [key: string]: number } = {}

        for (const item of nums) {
            obj[item] = (obj[item] || 0) + 1;
        }

        for (const [key, num] of Object.entries(obj)) {
            if (num >= k) {
                res.push(Number(key))
            }
        }

        return res;
    }
}
