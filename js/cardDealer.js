console.clear();  // clears the console
let suitsA = ["Hearts","Diamonds","Clubs","Spades"];   // store suits in array
let cardsA = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];  // store cards
let card1 = [`${cardsA[0]}`, `of`, `${suitsA[0]}`]  // build a card
let number = 0
let deck = [];
let currentsuit = "";
let drawncard = [];
let hand = [];
let rand1 = 0;   // create variables used in program


for (i = 0 ; i < suitsA.length ; i++) {
    currentsuit = (`${suitsA[i]}`)   // sets the suit of cards to make
    for (j = 0 ; j < cardsA.length ; j++) {
     deck.push(`${cardsA[j]} of ${suitsA[i]}`)   // adds each of the cards in that suit
     number = number++
    }   // now we have all 52 cards
 
 }

 for (i = 0 ; i < 5; i++) {     // loop to create a hand of 5 cards
    rand1 = (Math.floor(Math.random() * (deck.length)))   // creates a random number within the range
    dranwcard = [`${deck[rand1]}`]  // draws a card from those that are available
    hand.push(`${dranwcard}`);  // adds that to the player's hand
    deck.splice(rand1,1);  // removes that card from the available deck
 }


console.log(`My hand is ${hand}`)  //outputs the hand




