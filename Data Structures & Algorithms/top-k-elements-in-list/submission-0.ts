class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const collection = new Map<number, number>();
        for(let i=0;i<nums.length;i++){
            if(collection.has(nums[i])){
                collection.set(nums[i], collection.get(nums[i]) + 1);
            }else{
                collection.set(nums[i], 1);
            }
        }
        const sorted = [...collection.entries()].sort((a,b)=>b[1]-a[1]);
        return sorted.slice(0, k).map(entry=>entry[0]);
    }
}
