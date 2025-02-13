/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let charset = new Set();
    let maxi = 0;
    let n = s.length;
    for(let right = 0; right < n; right++){
        while(charset.has(s[right])){
            charset.delete(s[left]);
            left++;
        }
        charset.add(s[right]);
        maxi = Math.max(maxi, right-left+1);
    }
    return maxi;

    
};