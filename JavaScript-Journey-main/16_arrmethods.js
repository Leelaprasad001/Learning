// Array Methods

let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
console.log(typeof b)

let c = num.join(" and ")
console.log(c)
 
let r = num.pop() // pop returns the popped element
console.log(num, r)

let r1 = num.push(56) // push returns the new array length
console.log(num, r1)

let r3 = num.shift()
console.log(r3, num) // Removes an element from the start of the array

let r4 = num.unshift(78)
console.log(r4, num)
console.log(r4)