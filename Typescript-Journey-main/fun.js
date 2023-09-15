"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
function getU(v) {
    return v.toUpperCase();
}
function sign(name, email, pass) {
    return "login";
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
console.log(add(5));
console.log(getU("hi"));
console.log(sign("leela", "leela@gmail.com", true));
loginUser("h", "h@h.com");
// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
consoleError("Error occured");
handleError("hello");
