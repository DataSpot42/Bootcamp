console.clear();
let accnumber = 99994210;   
let balance = 250;   
let actualpin = 1234   // create variables and store numbers required in it
const cashWithdrawal = (pin, amount, accnum) => {   // declare a variable as a function and define contents
    if (pin == actualpin) {    // if 2 variables match..
        console.log(`Pin number is correct`)   //... output this text
        if (amount > fundsCheck()){   // if one variable is larger than the function variable....
            console.log("insufficient funds")   //... output this text
        }else{    // if not...
            balance = balance - amount;    // deduct variable from variable
            console.log(`withdrawing £${amount} from ${accnum}`);  // ouput results
            console.log(`your new balance is £${balance}`)   // output variable
        }
    } else {  
        console.log(`Sorry you pin numer is incorrect please try again`)
    }
}
 
const fundsCheck = () =>{    // peform function
return balance;   // put value of variable into function caller
}
 
cashWithdrawal(1234, 250, accnumber);  // call function and store values