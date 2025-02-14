/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxi = 0;
    let count = 0;
    for(let i = 0; i<nums.length; i++){
        if (nums[i]===1){
            count+=1;
        }
        else{
            count=0;
        }
        maxi = Math.max(maxi,count);
    }
    return maxi;
    
};