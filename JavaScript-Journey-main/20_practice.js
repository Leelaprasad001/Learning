
// Practice Problem 1
let arr = [1, 2, 3, 4, 5, 6, 7, 83]
let a = 20
arr.push(a)
console.log(arr)

// Practice Problem 2
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 83]
// let a1;
// do {
//   a1 = prompt("Enter a number")
//   a1 = Number.parseInt(a1)
//   arr1.push(a1)
// } while (a1 != 0);
// console.log(arr1)

// Practice Problem 3
let arr2 = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let n = arr2.filter((x)=>{
  return x%10 == 0
})
console.log(n)

// Practice Problem 4
let arr3 = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let n1 = arr3.map((x)=>{
  return x*x
})
console.log(n1)

// Practice Problem 5
let arr4 = [1, 2, 3, 4, 5]
let n2 = arr4.reduce((x1, x2) => {
  return x1 * x2
})
console.log(n2)