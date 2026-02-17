1/**
2 * @param {number} turnedOn
3 * @return {string[]}
4 */
5var readBinaryWatch = function(turnedOn) {
6    const result = [];
7    
8    for (let hour = 0; hour < 12; hour++) {
9        
10        for (let minute = 0; minute < 60; minute++) {
11            
12            const countBits = (n) => n.toString(2).split('0').join('').length;
13            
14            if (countBits(hour) + countBits(minute) === turnedOn) {
15                
16                const time = hour + ":" + 
17                             (minute < 10 ? "0" + minute : minute);
18                
19                result.push(time);
20            }
21        }
22    }
23    
24    return result;
25};