class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res: string = "";
        for(let i=0;i<strs.length;i++){
            const word=strs[i];
            res+=`${word.length}#${word}`;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res: string[] = [];
        let i = 0;
        while (i<str.length) {
            const hashIndex=str.indexOf("#", i);
            const length=Number(str.slice(i,hashIndex));
            res.push(str.slice(hashIndex+1,hashIndex+1+length));
            i=hashIndex+1+length;
        }
        return res;
    }
}
