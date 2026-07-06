class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const regEx = RegExp(/^[a-zA-Z0-9]+$/)
        const line = s.toLocaleLowerCase().split('').filter(s => regEx.test(s))

        console.log(line)

        return line.join('') === line.reverse().join('')
    }
}
