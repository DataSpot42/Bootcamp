// dice roller
const checkZero = () => {
    if (dice == 0) {
        dice = (Math.floor(Math.random() * 7))  // roll dice again if result is zero
        checkZero();
    } else {}
}


console.clear();
let dice = 0;
let diceTotal = 0
const diceA = [];
for (let i = 0 ; i < 10 ; i++) {
    
    dice = (Math.floor(Math.random() * 7))   // set variables
checkZero();


diceA.splice(i, 0, dice)
}
let diceP1 = diceA.slice(0 , 5);
let diceP2 = diceA.slice(5 , 10);

console.log(`Player 1 rolled ${diceP1}`);  // output result
console.log(`Player 2 rolled ${diceP2}`);  // output result
let total1 = 0
for (let i = 0 ; i < 5 ; i++) {
    total1 = total1 + diceP1[i]

}
console.log(`Player 1's total was ${total1}`)
let total2 = 0
for (let i = 0 ; i < 5 ; i++) {
    total2 = total2 + diceP2[i]

}
console.log(`Player 2's total was ${total2}`)
if (total1 == total2) {
    console.log(`Player 1 and 2 got the same total!`)
} else if (total1 > total2) {
    console.log(`Player 1 got the highest total`)
} else { console.log(`Player 2 got the highest total`)
}
