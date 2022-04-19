const os = require('os');

// Platform (windows-win32 | mac-darwin | etc)
console.log(os.platform());

// CPU arch
console.log(os.arch());

// CPU core info
//console.log(os.cpus());

// Free Memory
console.log(os.freemem());

// Total Memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());