class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxSize = 0;
        let left = 0;
        const set = new Set<string>();

        for (let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            set.add(s[right]);

            maxSize = Math.max(maxSize, right - left + 1);
        }

        return maxSize;
    }
}
