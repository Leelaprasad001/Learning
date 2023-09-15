let greetings: string = "Hello leela";

console.log(greetings.toLowerCase());

//number
let n: number = 123.3
console.log(n.toFixed())

//boolean
let b: boolean = false
console.log(b)

//any not mentioned any data type defaultly takes type based on return type
let hero;

function gethero()
{
    return true
}

hero = gethero()
console.log(hero)

export {}