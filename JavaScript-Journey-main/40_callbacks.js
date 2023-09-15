// Syncronous programming

// let a = prompt("What is your name?");
let a = "Prasad"
// let b = prompt("What is your age?");
let b = 21
// let c = prompt("What is your favorite color?");
let c = "color"
console.log(a + " is " + b + " years old and has " + c + " favorite color.");



// Asynchronous programming
console.log("Start")
setTimeout(function() {
  console.log("Hey I am good");
}, 3000)
console.log("End")
