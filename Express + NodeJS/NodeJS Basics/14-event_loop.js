// Event Loop

// The event loop is a mechanism used by JavaScript to handle asynchronous events. It allows web applications to
// Asynchronous 


console.log('first look')
setTimeout(() => {
    console.log('second task')
}, 0)

console.log('next task');

// output: 
// first look
// next Text
// second task

const { lookup } = require('dns')
const{ readFile } = require('fs')

console.log('started')

readFile('./content/first.txt', 'utf-8', (err, res) => {
    if(err){
        console.log(err)
        return
    }
    console.log(res)
    console.log('completed')
})
console.log('starting new task')

// output: 
// started
// starting new taask
// This is first text file
// completed


setInterval(() => {
    console.log('hello world')
}, 2000)

console.log('I will run fisrt');

// output:
// I will run fisrt
// hello world
// hello world
// hello world
// hello world
// hello world
// hello world
