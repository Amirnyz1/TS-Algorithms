// the first algorithm
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    throw new Error("No two sum solution");
}

console.log(twoSum([2, 7, 11, 15], 26));



//The second algorithm
function twoSum2(nums: number[], target: number): number[] {
    const myMap = new Map<number, number>();

    for (let i =0; i<nums.length;i++){
        const complement = target - nums[i];
        
        if(myMap.has(complement)){
            return [myMap.get(complement)!, i]
        }

        myMap.set(nums[i], i)
    }
    return []
}

console.log(twoSum2([2, 7, 11, 15], 9));