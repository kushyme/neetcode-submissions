class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashmap = new Map<string, string[]>();
        for(let i=0;i<strs.length;i++){
            const count = new Array(26).fill(0);
            for(let j=0;j<strs[i].length;j++){
                count[strs[i].charCodeAt(j) - "a".charCodeAt(0)] += 1;
            }
            const key = count.join("#");
            if(!hashmap.has(key)) {
                hashmap.set(key, [strs[i]]);
            }else if(hashmap.has(key)){
                hashmap.get(key).push(strs[i])
            }
        }
        return Array.from(hashmap.values());
    }
}
