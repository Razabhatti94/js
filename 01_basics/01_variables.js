const accountId = 511
let accountEmail = "raza@gamil.com "
var accountPassword = "12345"
accountCity = "karachi"
let accountState;   

// accountId = 2 not allowed
accountEmail = "bhatti@gamil.com "
accountPassword = "55555"
accountCity = "lahore"

/* 
prefer not to use VAR 
because of issuse in block scope and functional scope.
*/

console.log(accountId); 
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])