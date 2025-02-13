/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let sum = 0;
    let n = nums.length;
    let mini = Infinity;

    for(let right = 0; right < n; right++){
        sum+=nums[right];

        while(sum>=target){
            mini = Math.min(mini, right-left+1);
            sum-=nums[left];
            left++;
        }

    }
    return mini === Infinity?0:mini;

    
};