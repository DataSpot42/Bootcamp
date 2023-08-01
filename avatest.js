
let char = "";
let count = [];
let num = 0;
let letter = 0;
let word = "AAAaaabbbbcccdddsssssssttttxxxzzzzzzzz";

let wordA = word.split("");
for (let j=65; j < 123; j++) {
 num = 0;
 letter = 0;
  for (let i=0; i < wordA.length; i++) {
    
    if (String.fromCharCode(j) == wordA[i]) {
      letter++
      char = String.fromCharCode(j) 
    } {}
  }  
  if (letter > 0) {count.push(char + ':' + letter)}    
      
   /*-- count.splice(i,0,(String.fromCharCode(j)));  */
    
   /*-- let i=0; i < wordA.length; i++ */ 
   /* let j=97; j < 122; j++ */
    
   }    
 
let final=count.join(` , `)
console.log(final);

