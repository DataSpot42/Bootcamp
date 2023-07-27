let var1 = 13   // create variable and store value
let var2 = 18   // create variable and store value
let var3 = 5    // create variable and store value
if (var1 < var2 && var1 < var3) {   // is var1 is larger than var2 AND var1 is larger than var3
    console.log(`The lowest number is ${var1}`)  // output text and variable to console
} else {   // otherwise do this
    if (var2 < var1 && var2 < var3) {   // if first comparison and second comparison is true
        console.log(`The lowest number is ${var2}`)   // output text and variable to console
    } else if (var3 < var1 && var3 < var2) {   // if not then do another comparison
        console.log (`The lowest number is ${var3}`)  // output text and variable to console
    } else {}   // if not do nothing
}