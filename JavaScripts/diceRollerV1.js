// dice roller

console.clear();
let dice = 0;
let diceTotal = 0
const diceA = [];
for (let i = 0 ; i < 10 ; i++) {
    
    dice = (Math.floor(Math.random() * 7))   // set variables
if (dice == 0) {
    dice = (Math.floor(Math.random() * 7))  // roll dice again if result is zero
} else {}

diceA.splice(i, 0, dice)
}

console.log(`The 10 rolls of a dice where ${diceA}`);  // output result
for (let i = 0 ; i < 10 ; i++) {
    diceTotal = diceTotal + diceA[i];
}
let diceAver = Math.round(diceTotal / 10);
console.log(`The average of the 10 dice role is ${diceAver}`);  // work out the average roll
let max =diceA[0]
for (let i = 0 ; i < 10 ; i++) {
    if (diceA[i] > max) {
        max = diceA[i]

    }
}
console.log(`The highest role was ${max}`);
let min =diceA[0]
for (let i = 0 ; i < 10 ; i++) {
    if (diceA[i] < min) {
        min = diceA[i]

    }
}
console.log(`The lowest role was ${min}`);