const os = require('os');

// Platform (windows-win32 | mac-darwin | etc)
console.log(os.platform());

// CPU arch
console.log(os.arch());

// CPU core info
console.log(os.cpus());