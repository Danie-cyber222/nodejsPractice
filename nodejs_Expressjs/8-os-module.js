const os = require('os')

// info about current user 
const user = os.userInfo()
console.log(user);


// returns the system uptime in seconds 
console.log(`the system uptime is ${os.uptime()} seconds`);

const curentOS = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freeMem : os.freemem(),

}
console.log(curentOS);

