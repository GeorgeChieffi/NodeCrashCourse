const path = require("path");

// Base file name
console.log(__filename); // gives directory + file name
console.log(path.basename(__filename)); // gives just file name

// Directory name
console.log(__dirname); // outputs directory of file
console.log(path.dirname(__filename)); // same output but uses path module

// File extention
console.log(path.extname(__filename)); // outputs the extention of the file ex(this outputs .js)

// Create path object
console.log(path.parse(__filename)); //outputs info on the file in json format

// Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"))