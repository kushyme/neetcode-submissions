class Solution {
    /**  
        @param {string} s
        @return {boolean}*/
isPalindrome(s: string): boolean {
    const hashmap1 = new Map<number, string>;
    const hashmap2 = new Map<number, string>;
    const chars:string[] = s.toLowerCase().split("").filter(c => /[a-z0-9]/.test(c));
    let firstMid:number;
    let secondMid:number;
    if((chars.length / 2).toString().endsWith(".5")){
        firstMid = chars.length/2 - 0.5
        secondMid = chars.length/2 + 0.5
    }else {
        firstMid = chars.length/2
        secondMid = chars.length/2
    }

    let counter = 1;
    for(let i=secondMid;i<chars.length;i++){
        hashmap1.set(counter, chars[i]);
        counter++;
    }
    counter = 1;
    for(let j=firstMid-1;j>=0;j--){
        hashmap2.set(counter, chars[j]);
        counter++;
    }

    if(hashmap1.size !== hashmap2.size){
        return false
    }

    for(let x=1;x<=hashmap1.size;x++){
        if(hashmap1.get(x) !== hashmap2.get(x)){
            return false;
        }
    }
    return true;
    }
}