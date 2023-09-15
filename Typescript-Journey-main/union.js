"use strict";
//using union to use more data types for an variable
Object.defineProperty(exports, "__esModule", { value: true });
//union in variables
var score = 33;
score = 44;
score = "55";
var leela = { name: "leela", id: 330 };
leela = { username: "lp", id: 330 };
//union in functions
// function getid(id: number | string){
//     console.log(id);
// }
getid(3);
getid("3");
function getid(id) {
    if (typeof id == "string") {
        id.toLowerCase();
    }
    if (typeof id == "number") {
        id = id + 2;
    }
    console.log(id);
}
//union using arrays
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2"];
var data4 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle";
