let string = "The quick brown fox jumps over the lazy dog";
let stringa = string.toLowerCase();
let stringA = stringa.split("");
let test = new Array(26).fill(0);
let counter = 0;

let num = 0;
let count = 0;


for (i=0; i < stringA.length; i++) {
    for (let j=97; j < 123; j++) {
        if (String.fromCharCode(j) == stringA[i] ) {
            let letter = j - 97;
            if (test[letter] == 1) {}
            else { test[letter] = 1}
            

        }
    }

}
for (k=0; k < test.length; k++ ) {
  count = count + test[k];
}
return (count = 26) ? true : false;
