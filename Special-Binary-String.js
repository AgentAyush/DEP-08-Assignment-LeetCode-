1var makeLargestSpecial = function(s) {
2    let count = 0, i = 0;
3    let res = [];
4    for (let j = 0; j < s.length; j++) {
5        count += s[j] === '1' ? 1 : -1;
6        if (count === 0) {
7            res.push("1" + makeLargestSpecial(s.substring(i + 1, j)) + "0");
8            i = j + 1;
9        }
10    }
11    res.sort().reverse();
12    return res.join("");
13};