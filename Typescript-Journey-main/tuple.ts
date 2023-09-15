

const user: (string | number)[] = [1, "hc"]
// console.log(user)

//Note: order of arrays also matters and also number of elements matters

let tUser: [string, number, boolean]
tUser = ["hc", 131, true]
// console.log(tUser[0])

//reference of colors
let rgb: [number, number, number] = [255, 123, 112]

//also used using type
type User = [number, string]
const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"
// newUser[0] = "hc.com"   //throws an array bacause in place of number we assign string
// newUser.push(true)  //throws an array because boolean is not declared
console.log(newUser)
export{}