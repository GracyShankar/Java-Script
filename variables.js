const account_Id = 142546
let account_email = " grcay@gamil.com"
var account_password =  "12334566"
accountCity = "Jaipur"

//account id = 2// not allowed

account_email = "hs@gmail.com"
account_password="2134567"
accountCity = "Delhi"

let account_State ;

console.log(account_Id)

/*
Prefer not to use var 
 because of issue in block scope and functional scope
*/

console.table({account_Id,account_email,account_password,accountCity,account_State})