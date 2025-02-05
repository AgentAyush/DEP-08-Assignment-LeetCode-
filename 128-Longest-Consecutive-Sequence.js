/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    let numset = new Set(nums);
    let longest = 0;
    for (let num of numset){
        if(!numset.has(num-1)){
            let currnum = num;
            let streak = 1;

            while(numset.has(currnum+1)){
                currnum++;
                streak++;
            }
            longest = Math.max(longest,streak);
        }

    }
    return longest;
};