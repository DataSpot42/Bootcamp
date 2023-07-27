// dice game
console.clear();
let dice = 0;
let diceTotal = 0  // set variables
let total1 = 0
let total2 = 0
let oneRollP1 = 0
let oneRollP2 = 0
const diceA = [];
for (let i = 0 ; i < 10 ; i++) {   //10 rolls of the dice
    
    dice = (Math.floor(Math.random() * 6))   // get a random number from 0-5
    diceA.splice(i, 0, (dice + 1))  // add result to array
}
let diceP1 = diceA.slice(0 , 5);   // take first 5 rolls into P1 array
let diceP2 = diceA.slice(5 , 10); // take next 5 rolls into P2 array

for (let i = 0 ; i < 5 ; i++) {
    if (diceP1[i] == 6) {
        total1 = total1 + 10    // adds 10 points for eveey 6 rolled for P1
    }
}
for (let i = 0 ; i < 5 ; i++) {
    if (diceP2[i] == 6) {
        total2 = total2 + 10   // adds 10 points for eveey 6 rolled for P2      
    }

}
if (diceP1[0] == diceP1[1] && diceP1[0] == diceP1[2] && diceP1[0] == diceP1[3] && diceP1[0] == diceP1[4]) {
    total1 = total1 + 50   // adds 50 points if all the 5 dice roll the same  for P1
    if (diceP1[0] == 6) {
        total1 = total1 + 50  // add another 50 if they are all 6's
    }
}
if (diceP2[0] == diceP2[0] && diceP2[0] == diceP2[2] && diceP2[0] == diceP2[3] && diceP2[0] == diceP2[4]) {
    total2 = total2 + 50   // adds 50 points if all the 5 dice roll the same  for P2
    if (diceP2[0] == 6) {
        total2 = total2 + 50 // add another 50 if they are all 6's
    }
}


for (let i = 0 ; i < 5 ; i++) {
    total1 = total1 + diceP1[i]   //get P1's dice total

}  
for (let i = 0 ; i < 5 ; i++) {
    total2 = total2 + diceP2[i]   //get P2's dice total
}

for (let i = 0 ; i < 5 ; i++) {
    if (diceP1[i] == 1) {
        oneRollP1 = (oneRollP1 + 1); //if each dice roll = 1 add 1 to counter
    }
}
console.log(oneRollP1);
if (oneRollP1 >=4) {
    total1 = 0;     // if 4 or more rolls where 1 then zero the socre
}
for (let i = 0 ; i < 5 ; i++) {
    if (diceP2[i] == 1) {
        oneRollP2 = (oneRollP2 + 1);   //if each dice roll = 1 add 1 to counter
    }
}
if (oneRollP2 >=4) {
    total2 = 0;   // if 4 or more rolls where 1 then zero the socre
}

  
console.log(`Player 1 rolled ${diceP1}`);  
console.log(`Player 2 rolled ${diceP2}`);  // output results of rolls

console.log(`Player 1's total was ${total1}`)
console.log(`Player 2's total was ${total2}`)  //output final scores


if (total1 == total2) {
    console.log(`Player 1 and 2 got the same total!`)
} else if (total1 > total2) {
    console.log(`Player 1 got the highest total`)
} else { console.log(`Player 2 got the highest total`)  //show who scored the most
}
