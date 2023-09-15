"use strict";
//genrics makes component(chunk) reusable
const score = [];
const names = [];
//types of val and return val are mentoined
function identityOne(val) {
    return val;
}
// console.log(identityOne(true))
// console.log(identityOne(10))
//type is any this means val any type of values and alsoreturns any type of value
function identityTwo(val) {
    return "ok";
}
// console.log(identityTwo(10))
//takes and return same type
function identityThree(val) {
    return val;
}
// console.log(identityThree("ok"))
//takes and return same type
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({})
//taking array as an input
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
console.log(getSearchProducts([10, 20, 30, 40, 50]));
//above function using arrow function
//<T,>  represents as an generic
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
