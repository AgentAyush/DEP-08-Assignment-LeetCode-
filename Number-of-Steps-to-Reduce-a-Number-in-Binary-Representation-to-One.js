1/**
2 * @param {string} s
3 * @return {number}
4 */
5var numSteps = function(s) {
6    // convert the string s to an array
7    let arr = [...s];
8
9    // count how many times operation needed
10    let cnt = 0;
11
12    // loop until the number becoming 1
13    while(arr.length != 1){
14        const n = arr.length;
15        // if the number is odd
16        if(arr[n - 1] === '1'){
17            let j = n - 1;
18            // consecutive trailing 1s become 0s
19            while(j >= 0 && arr[j] === '1'){
20                arr[j] = '0';
21                j--;
22            }
23            // if there are at least one '0' in s
24            if(j >= 0){
25                arr[j] = '1';
26            }
27            // else, add '1' as the first element of the array
28            else{
29                arr.unshift('1');
30            }
31        }
32        // if the number is even
33        else{
34            arr.pop();
35        }
36        cnt++;
37    }
38    return cnt;
39};