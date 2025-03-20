const accountId = 1234
let accountEmail = "Abhi@000gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "234312523"
accountCity = "Uttar Pradesh"

console.log(accountId)
console.table([accountEmail, accountId, accountPassword, accountCity])

/*
     Prefer not to use var
     bicause of issue in block scopr and functional scope
*/