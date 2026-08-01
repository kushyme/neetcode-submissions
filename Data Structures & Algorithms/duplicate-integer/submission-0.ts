class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        for(let i=0;i<=nums.length;i++){
            let comparedNumber = nums[i];
            for(let j=i+1;j<=nums.length;j++){
                if(comparedNumber === nums[j]){
                    return true;
                }
                continue;
            }
        }
        return false;
    }
}
