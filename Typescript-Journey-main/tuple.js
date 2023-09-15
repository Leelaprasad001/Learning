"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = [1, "hc"];
// console.log(user)
//Note: order of arrays also matters and also number of elements matters
var tUser;
tUser = ["hc", 131, true];
// console.log(tUser[0])
//reference of colors
var rgb = [255, 123, 112];
var newUser = [112, "example@google.com"];
newUser[1] = "hc.com";
// newUser[0] = "hc.com"   //throws an array bacause in place of number we assign string
// newUser.push(true)  //throws an array because boolean is not declared
console.log(newUser);
