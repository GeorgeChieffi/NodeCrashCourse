const fs = require('fs');
const path = require('path');

// For most funcitons in the fs module, there is both
// a synconus and asyncronus version

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => { // (err)=> is the same as saying function(err){}
//     if(err) throw err;
//     console.log('Folder created ... ')
// });

// Create and Write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) => { // (err)=> is the same as saying function(err){}
//     if(err) throw err;
//     console.log('File written to ... ')

//     //File Append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nI Love Node.js', (err) => { // (err)=> is the same as saying function(err){}
//         if(err) throw err;
//         console.log('File appended to ... ')
//     });
// });

// Read File
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8' , (err, data) => { // (err)=> is the same as saying function(err){}
//     if(err) throw err;
//     console.log(data)
// });

// Rename File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloWorld.txt'), (err) => { // (err)=> is the same as saying function(err){}
    if(err) throw err;
    console.log('File renamed ... ')
});
