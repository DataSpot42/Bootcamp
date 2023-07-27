let films = ["Star Wars IV", "Jaws" , "2001" , "Terminator"]; // store text into an array
films.splice(1 , 0, "Back to the Future", "Superman");   // add 2 more items to array after first one
for (let i = 0 ; i < films.length ; i++) {  // perform a loop the number of times equal to the length of the array
    console.log(films[i])   // each time through the loop, output item number "i" from the array
}