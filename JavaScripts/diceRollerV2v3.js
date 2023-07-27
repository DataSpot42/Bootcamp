// dice roller
console.clear();
let dice = 0;
let diceTotal = 0  // set variables
const diceA = [];
for (let i = 0 ; i < 10 ; i++) {   //10 rolls of the dice
    
    dice = (Math.floor(Math.random() * 6))   // get a random number from 0-5
    diceA.splice(i, 0, (dice + 1))  // add result to array
}
let diceP1 = diceA.slice(0 , 5);   // take first 5 rolls into P1 array
let diceP2 = diceA.slice(5 , 10); // take next 5 rolls into P2 array
 
console.log(`Player 1 rolled ${diceP1}`);  
console.log(`Player 2 rolled ${diceP2}`);  // output results
let total1 = 0
for (let i = 0 ; i < 5 ; i++) {
    total1 = total1 + diceP1[i]

}
console.log(`Player 1's total was ${total1}`) //get P1's total and display it
let total2 = 0
for (let i = 0 ; i < 5 ; i++) {
    total2 = total2 + diceP2[i]

}
console.log(`Player 2's total was ${total2}`) //get P2's total and display it
if (total1 == total2) {
    console.log(`Player 1 and 2 got the same total!`)
} else if (total1 > total2) {
    console.log(`Player 1 got the highest total`)
} else { console.log(`Player 2 got the highest total`)  //show who scored the most
}
