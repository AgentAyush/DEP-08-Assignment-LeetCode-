1from collections import Counter
2
3class Solution:
4    def longestBalanced(self, s: str) -> int:
5        def calc1(s):
6            res = 0
7            i = 0
8            while i < len(s):
9                j = i
10                while j < len(s) and s[j] == s[i]:
11                    j += 1
12                res = max(res, j - i)
13                i = j
14            return res
15
16        def calc2(s, a, b):
17            res = 0
18            i = 0
19            while i < len(s):
20                while i < len(s) and s[i] not in (a, b):
21                    i += 1
22                mp = {0: i - 1}
23                diff = 0
24                while i < len(s) and s[i] in (a, b):
25                    diff += 1 if s[i] == a else -1
26                    if diff in mp:
27                        res = max(res, i - mp[diff])
28                    else:
29                        mp[diff] = i
30                    i += 1
31            return res
32
33        def calc3(s):
34            mp = {(0, 0): -1}
35            cnt = [0, 0, 0]
36            res = 0
37            for i, c in enumerate(s):
38                cnt[ord(c) - ord('a')] += 1
39                x = cnt[0] - cnt[1]
40                y = cnt[1] - cnt[2]
41                key = (x, y)
42                if key in mp:
43                    res = max(res, i - mp[key])
44                else:
45                    mp[key] = i
46            return res
47
48        x = calc1(s)
49        y = max(calc2(s, 'a', 'b'),
50                calc2(s, 'b', 'c'),
51                calc2(s, 'a', 'c'))
52        z = calc3(s)
53        return max(x, y, z)