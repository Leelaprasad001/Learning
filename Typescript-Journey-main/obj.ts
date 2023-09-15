

// const user = {
//     name: "leela",
//     email: "leela@gmail.com",
//     isa: true
// }


// function createuser({name: string, ispaid: boolean}){
//     return {name: string, ispaid: boolean}
// }

// function createcourse():{name: string, price: number}{
//     return {name: "HTML", price:400}
// }

// let newuser = {name: "leela", ispaid: true, email:"leelaa@gmail.com"}

// console.log(createuser(newuser))
// console.log(createcourse())






// type user = {
//     name: string,
//     email: string,
//     isa: boolean
// }

// function createuser(user: user): user{
//     return user
// }

// console.log(createuser({name: "h", email: "", isa: true}))





type user = {
    readonly id: string,
    name: string,
    email: string,
    isa: boolean,
    credcard?: boolean; // using  ? no need to assign values in object
}

let myuser: user = {
    id: "1234",
    name: "leela",
    email: "leela@gmail.com",
    isa: true,
}  


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

console.log(myuser.name)

export{}