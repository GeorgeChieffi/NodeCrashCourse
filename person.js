// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {
//
// })
// this whole class is wrapped by this function we just cant see it


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name}, and I am ${this.age}`);
    }
}

module.exports = Person;