let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
  }


  // Problem No 1
  //Object.keys(marks).length to get length of object marks and Object.keys(marks)[i] to get keys and marks[Object.keys(marks)[i]] to get values
  for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
  }
  


  // Problem No 2 simple solution
  for (let key in marks) {
    console.log("The marks of " + key + " are " + marks[key])
  }
  
  // Problem No 3
//   let cn = 43
//   let i
//   while (i != cn) {
//     console.log("Try again")
//     i = prompt("Enter a number")
//   }
//   console.log("You have entered a correct number")
  

  // Problem No 4
  const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
  }
  
  console.log(mean(4, 5, 6, 7))