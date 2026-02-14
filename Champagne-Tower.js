1/**
2 * @param {number} poured
3 * @param {number} query_row
4 * @param {number} query_glass
5 * @return {number}
6 */
7var champagneTower = function(poured, query_row, query_glass) {
8   let dp = new Array(query_row + 1).fill(0);
9     dp[0] = poured;
10    for(let row =1; row <= query_row;row++){
11      for(let i = row - 1; i >=0;i--){
12          let extra = dp[i] - 1;
13          if(extra > 0){
14            dp[i] = 0.5*extra;
15            dp[i+1] += 0.5*extra; 
16          }else{
17            dp[i] = 0;
18          }  
19      } 
20    }
21    return Math.min(1,dp[query_glass]);
22};