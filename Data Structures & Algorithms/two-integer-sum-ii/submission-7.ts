class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0;
        let right = numbers.length - 1;
        while (left < right) {
            const sum = numbers[left] + numbers[right];
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                return [left + 1, right + 1];
            }
        }
        return [];
    }

    old(numbers: number[], target: number): number[] {
        for(let i=0;i<numbers.length;i++){
            for(let j=i+1;j<numbers.length;j++){
                if(numbers[i] + numbers[j] === target){
                    return [i+1, j+1];
                }
            }
        }
        return []
    }
        
}
