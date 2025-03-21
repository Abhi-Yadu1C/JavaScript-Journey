/* 
1: Primitive Data Type
7 Types : String, Number, Boolean, null, undefined, Symbol, BinInt

2: Reference (Non primitive)
objects, Array, Functions

*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345562656757n;

// none primitive
const heros = ["shaktiman", "naagraj", "doga"]

let myObj ={
    name: "Hitesh",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

