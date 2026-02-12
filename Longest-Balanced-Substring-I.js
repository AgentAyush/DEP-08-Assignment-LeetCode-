1/**
2 * @param {string} s
3 * @return {number}
4 */
5// function longestBalanced(s) {
6//     let res = 0;
7//     for (let i = 0;  i < s.length; i++) {
8//         a = 'a'.charCodeAt(0);
9//         const freq = new Array(26).fill(0);
10//         for (let j = i; j < s.length; j++) {
11//             const f = ++freq[s[j].charCodeAt(0) - a];
12//             if (freq.every((v) => !v || v === f)) {
13//                 res = Math.max(res, j - i + 1);
14//             }
15//         }
16//     }
17//     return res;
18// }
19
20
21
22
23
24function longestBalanced(s){
25    let result = 0;
26    
27    for (let i = 0; i<s.length; i++){
28        a = 'a'.charCodeAt(0);
29        const frequency = new Array(26).fill(0);
30        for(let j = i; j<s.length; j++){
31            const f = ++frequency[s[j].charCodeAt(0)-a];
32            if(frequency.every((v)=> !v || v===f)){
33                result = Math.max(result, j-i+1);
34            }
35
36        }
37
38    }
39    return result;
40}
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59