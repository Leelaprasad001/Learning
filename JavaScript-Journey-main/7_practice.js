
// Problem No 1


let age1 = 12
if (age1 > 10 && age1 < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}


// Problem No 2

let age2 = 12
switch (age2) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}

// Problem No 3

let num = 12
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}

// Problem No 3

let num2 = 12
if (num2 % 2 == 0 || num2 % 3 == 0) {
  console.log("Your number is divisible by 2 or 3")
}
else {
  console.log("Your number is not divisible by 2 or 3")
}

// Problem No 5
let age = 19
let a = age > 18 ? "You can drive" : "You cannot drive"
console.log(a)