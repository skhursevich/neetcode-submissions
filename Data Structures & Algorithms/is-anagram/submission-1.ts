class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let isAnagram = true
        const first: { [key: string]: number } = {}
 
        for (let k of s) {
            first[k] = first[k] ? first[k] + 1 : 1
        }

        console.dir(first)

        for (let m of t) {
            if (first[m]) {
                first[m]--
            }
        }

        console.dir(first)

        for (const [key, value] of Object.entries(first)) {
            if (value > 0) {
                isAnagram = false
            }
        } 

        return isAnagram
    }
}
