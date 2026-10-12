class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let index = 0;
        let lastIndex = numbers.length-1
        while(index !== lastIndex){
            if(numbers[index] + numbers[lastIndex] > target) {
                numbers.pop();
                lastIndex -= 1;
            }else if(numbers[index] + numbers[lastIndex] < target){
                index += 1;
            }else if(numbers[index] + numbers[lastIndex] === target){
                return [index+1, lastIndex+1]
            }
        }
    
            /*if(numbers[i] + numbers[j] > target){
                numbers.pop()
            }else if(numbers[i] + numbers[j] < target){
                console.log("i: ",numbers[i])
                numbers.shift();
                console.log("i: ", numbers[i])
            }else if(numbers[i] + numbers[j] === target){
                return [i+1, j+1];
            }*/
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
