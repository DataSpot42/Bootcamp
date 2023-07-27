console.clear();  // clear console output
let myArray = [
    "Curry",
    "Pizza",
    "Fish and Chips",
    "Sausage and Mash"
]    // store text into array
console.log(myArray);  // output array contents to console
myArray.pop();  // remove last element from array
console.log(`Using pop to take away last item we get : ${myArray}`);  // show array again with change
myArray.unshift("Garlic Bread", "Pasta");   // add new elements to start of array
console.log(`Using unshift to add two items item we get : ${myArray}`);  // show array again with change
myArray.shift();  // take away first element from array
console.log(`Using shift to take away first item we get : ${myArray}`); // show array again with change
let bestFood = myArray.slice(0 , 2);  // create new array with first 2 elements from another array
console.log(`Using slice to make a new Array of my first 2 items : ${bestFood}`); // show array again with change
myArray.splice(3 , 0, "Soup");  // add an element to the array as the 4th item
console.log(`Using splice we add an item to positon 4: ${myArray}`);  // show array again with change