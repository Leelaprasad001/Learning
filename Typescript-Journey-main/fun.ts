
function add(num: number){
    return num + 2
}

function getU(v: string){
    return v.toUpperCase()
}

function sign(name: string, email: string, pass: boolean){
    return "login"
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

console.log(add(5))
console.log(getU("hi"))
console.log(sign("leela", "leela@gmail.com", true))

loginUser("h", "h@h.com")


// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg); 
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
    
}

consoleError("Error occured")
handleError("hello")
export{}