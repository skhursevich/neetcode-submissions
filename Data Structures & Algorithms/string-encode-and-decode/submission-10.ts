class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((str) => `${str.length}♥${str}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res: string[] = []
        const data = str.split('');
        let idx = 0

        for (let i = idx; i < data.length; i++) {
            if (data[i] !== '♥') continue

            const count = data[i - 1];
            const word = data.slice(i + 1, parseInt(count) + i + 1)

            res.push(word.join(''))
        }

        return res;
    }
}
