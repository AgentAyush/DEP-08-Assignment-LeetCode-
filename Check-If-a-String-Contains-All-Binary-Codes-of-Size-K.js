1var hasAllCodes = function(s, k) {
2
3    const actual = 1 << k;
4
5    if (s.length - k + 1 < actual)
6        return false;
7
8    const set = new Set();
9
10    for (let i = 0; i <= s.length - k; i++) {
11        set.add(s.substring(i, i + k));
12    }
13
14    return set.size === actual;
15};