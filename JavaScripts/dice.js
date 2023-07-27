// dice roller

console.clear();
let dice = 0


dice = (Math.floor(Math.random() * 7))   // set variables
if (dice == 0) {
    dice = (Math.floor(Math.random() * 7))  // roll dice again if result is zero
} else {}
console.log(dice);  // output result
