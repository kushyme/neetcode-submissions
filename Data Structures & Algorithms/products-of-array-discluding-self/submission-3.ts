class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const left:number[] = [];
        const right:number[] = [];
        const result:number[] = [];

        for(let i=0;i<nums.length;i++){
            left.push(i > 0 ? left[i-1] * nums[i-1] : 1);
        }

        for(let i=nums.length-1;i>=0;i--){
            right[i] = i < nums.length-1 ? right[i+1] * nums[i+1] : 1;
        }

        for(let j=0;j<nums.length;j++){
            result.push(left[j] * right[j]);
        }

        return result;
    }
        
        
        
    old(nums){
        const res: number[] = [];
        for(let i=0;i<nums.length;i++){
            let product = 1;
            for(let j=0;j<nums.length;j++){
                if(i!==j){
                    product = product * nums[j];
                }
                if(j+1 === nums.length){
                    res.push(product);
                }
            }
        }
        return res;
    }

}