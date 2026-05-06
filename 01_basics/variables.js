const accountId = 144553 //cannot be changed
let accountEmail = "deb@gmail.com"
var accountPassword = "123456"
accountCity = "Kolkata"
let accountState; //undefined

// accountId = 2 // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail="yoo@gmail.com"
accountPassword="654321"
accountCity="Bangalore"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])