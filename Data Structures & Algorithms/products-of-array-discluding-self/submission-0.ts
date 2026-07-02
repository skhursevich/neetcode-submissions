class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefix = nums.map((num, idx, arr) => {
            let val = 1
            let count = 0

            if (idx === 0) {
                return 1
            }

            while (count < idx) {
                val *= arr[count]
                count++
            }

            return val
        })

        const suffix = [...nums].reverse().map((num, idx, arr) => {
            let val = 1
            let count = 0

            if (idx === 0) {
                return 1
            }

            while (count < idx) {
                val *= arr[count]
                count++
            }

            return val
        }).reverse()

        return prefix.map((item, idx) => item * suffix[idx])
    }
}
