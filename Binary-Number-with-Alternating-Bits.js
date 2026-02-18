1/**
2 * @param {number} n
3 * @return {boolean}
4 */
5var hasAlternatingBits = function(n) {
6    const s = n.toString(2);
7    for(let i = 0; i< s.length; i++){
8        if(s[i]===s[i+1]){
9            return false
10        }
11        
12    }
13    return true
14    
15};
16
17