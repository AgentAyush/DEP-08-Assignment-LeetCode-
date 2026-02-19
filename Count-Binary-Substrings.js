1function countBinarySubstrings(s) {
2    let result = 0, prevCount = 0, currCount = 1;
3
4    for (let i = 1; i < s.length; i++) {
5        if (s[i] === s[i - 1]) {
6            currCount++;
7        } else {
8            result += Math.min(prevCount, currCount);
9            prevCount = currCount;
10            currCount = 1;
11        }
12    }
13
14    return result + Math.min(prevCount, currCount);
15}