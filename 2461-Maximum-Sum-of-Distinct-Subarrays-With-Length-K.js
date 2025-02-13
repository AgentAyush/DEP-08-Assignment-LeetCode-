/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let n = nums.length;
    let s = new Set();
    let sum = 0, maxi = 0;
    let j = 0;

    for(let i = 0; i < n; i++){
        while(s.has(nums[i])){
            sum-=nums[j];
            s.delete(nums[j]);
            j++;
        }
        s.add(nums[i]);
        sum+=nums[i];

        if(s.size===k){
            maxi = Math.max(maxi,sum);
            sum-=nums[j];
            s.delete(nums[j]);
            j++;
        }       
            
    }
    return maxi;
    
};