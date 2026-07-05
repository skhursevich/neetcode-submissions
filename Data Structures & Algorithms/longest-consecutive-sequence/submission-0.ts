class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let start: number = nums[0]
        let queueLength = 1;
        const box = new Set(nums)

        for (const item of box) {
            if (box.has(item - 1) && item - 1 < start) {
                start = item - 1
            }
        }

        for (let i = 1; i < nums.length; i++) {
            if (!box.has(start + i)) {
                break
            }

            queueLength++
        }

        return queueLength;
    }
}
