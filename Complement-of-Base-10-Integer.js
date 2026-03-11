1/**
2 * @param {number} n
3 * @return {number}
4 */
5var bitwiseComplement = function(n) {
6    let bin = n.toString(2);
7    let comp = "";
8    for(let i of bin){
9        if(i=="0"){
10            comp+="1"
11        }
12        else{
13            comp+="0"
14        }
15    }
16    // return (Number(comp.toString(10)));
17
18    return parseInt(comp,2);    
19};