let num = 4593
let roman = []
let M = Math.floor((num / 1000))
num = num - M*1000
let CM = Math.floor((num / 900))
num = num - CM*900 
let D = Math.floor((num / 500))
num = num - D*500
let CD = Math.floor((num / 400))
num = num - CD*400
let C = Math.floor((num/100))
num = num - C*100
let XC = Math.floor((num / 90))
num = num - XC*90
let L = Math.floor((num / 50))
num = num - L*50
let XL = Math.floor((num/40))
num = num - XL*40
let X = Math.floor((num / 10))
num = num - X*10
let IX = Math.floor((num / 9))
num = num - IX*9
let V = Math.floor((num / 5))
num = num - V*5
let IV = Math.floor((num /4))
num = num - IV*4
let I = num
for (i=0 ; i < M; i++) {roman.push("M")};
for (i=0 ; i < CM; i++) {roman.push("CM")};
for (i=0 ; i < D; i++) {roman.push("D")};
for (i=0 ; i < CD; i++) {roman.push("CD")};
for (i=0 ; i < C; i++) {roman.push("C")};
for (i=0 ; i < XC; i++) {roman.push("XC")};
for (i=0 ; i < L; i++) {roman.push("L")};
for (i=0 ; i < XL; i++) {roman.push("XL")};
for (i=0 ; i < X; i++) {roman.push("X")};
for (i=0 ; i < IX; i++) {roman.push("IX")};
for (i=0 ; i < V; i++) {roman.push("V")};
for (i=0 ; i < IV; i++) {roman.push("IV")};
for (i=0 ; i < I; i++) {roman.push("I")};

console.log(roman.join(""))

let numer = roman.join("")
console.log(numer)
let rIV= numer.match(/IV/g)||([]);
let nConv = 0 + 4*rIV.length
console.log(numer)
numer=numer.replaceAll('IV','');
let rIX=numer.match(/IX/g)||([]);
nConv = nConv + 9*rIX.length
numer=numer.replaceAll('IX','');
let rI=numer.match(/I/g)||([]);
nConv = nConv + 1*rI.length
numer=numer.replaceAll('I','');
let rXL=numer.match(/XL/g)||([]);
nConv = nConv + 40*rXL.length
numer=numer.replaceAll('XL','');
let rXC=numer.match(/XC/g)||([]);
nConv = nConv + 90*rXC.length
numer=numer.replaceAll('XC','');
let rX=numer.match(/X/g)||([]);
nConv = nConv + 10*rX.length
numer=numer.replaceAll('X','');
let rL=numer.match(/L/g)||([]);
nConv = nConv + 50*rL.length
numer=numer.replaceAll('L','');
let rCD=numer.match(/CD/g)||([]);
nConv = nConv + 400*rCD.length
numer=numer.replaceAll('CD','');
let rD=numer.match(/D/g)||([]);
nConv = nConv + 500*rD.length
numer=numer.replaceAll('D','');
let rCM=numer.match(/CM/g)||([]);
nConv = nConv + 900*rCM.length
numer=numer.replaceAll('CM','');
let rC=numer.match(/C/g)||([]);
nConv = nConv + 100*rC.length
numer=numer.replaceAll('C','');
let rM=numer.match(/M/g)||([]);
nConv = nConv + 1000*rM.length
numer=numer.replaceAll('M','');

console.log(rIV)
console.log(numer);
console.log(nConv)
