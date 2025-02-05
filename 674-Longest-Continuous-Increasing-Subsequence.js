/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) return 0;

    let maxLen = 1; 
    let left = 0; 

    for (let right = 1; right < nums.length; right++) {
        if (nums[right] <= nums[right - 1]) {
            left = right;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
};
