1var reverseBits = function(n) {
2  let str = convertToBinary(n);
3  str = str.padStart(32, "0");
4  let reversed = str.split("").reverse().join("");
5  return convertToDecimal(reversed);
6};
7
8function convertToBinary(n) {
9  if (n === 0) return "0";
10
11  let binary = "";
12
13  while (n > 0) {
14    binary = (n % 2) + binary;
15    n = Math.floor(n / 2);
16  }
17
18  return binary;
19}
20
21function convertToDecimal(binaryStr) {
22  let decimal = 0;
23
24  for (let i = 0; i < binaryStr.length; i++) {
25    decimal = decimal * 2 + Number(binaryStr[i]);
26  }
27
28  return decimal;
29}
30