// Modules - Encapsulated code(only share minimum)
// CommonJS, every file is module (by default) and can be imported/exported.
// Modules are like JavaScript libraries. They are a set of functions that you want to include in your application.import { expect } from 'chai';
// You can include your own modules, or modules that are built into the Node.js system.
// Include Your Own Module

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }

// sayHi('leela')

// -> MODULES

console.log(module);

const names = require('./4-names')
const sayHi = require('./5-util')

console.log(names)

sayHi('leela')
sayHi(names.john)
sayHi(names.peter)


const data = require('./6-alternative-flavour')

console.log(data)
console.log(data.items)
console.log(data.singlePerson)

require('./7-mind-grenade')