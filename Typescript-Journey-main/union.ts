//using union to use more data types for an variable
//Note: order also matters

//union in variables
let score: number | string = 33

score = 44
score = "55"

//union using type
type user = {
    name: string;
    id: number
}

type admin = {
    username: string;
    id: number
}

let leela:user | admin = {name: "leela",id:330}

leela = {username:"lp", id:330}


//union in functions

// function getid(id: number | string){
//     console.log(id);
// }

getid(3)
getid("3")


function getid(id: number | string){
    if(typeof id == "string")
    {
        id.toLowerCase()
    }
    if(typeof id == "number")
    {
        id = id + 2
    }
    console.log(id)
}


//union using arrays

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: string[] | number[]  = ["1", "2"]
const data4: (string | number | boolean)[] = ["1", "2", 3, true]


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"  //throws an error
export{}