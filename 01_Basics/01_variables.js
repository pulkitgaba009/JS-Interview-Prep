const accountId = 123654;
let accountEmail = "pulkitgaba009@gmail.com";
var accountPassword = "12345";
accountCity = "Rudrapur";
let accountState

// this will return error as defined with const
// accountId=21
// console.log(accountId);

accountEmail = "raju@123";
accountPassword = 458;
accountCity = "Delhi";

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

/* 
Prefer not to use var keyword to declare a variable
because of issue in block scope and functional scope
*/


for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

