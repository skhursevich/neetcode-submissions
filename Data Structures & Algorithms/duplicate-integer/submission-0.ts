class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        return nums.map((item, idx, arr) => arr.indexOf(item) === idx).some(i => i === false) ? true : false
    }
}
