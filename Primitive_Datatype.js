//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //returns false because each Symbol is unique, even if they have the same description.

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["superman", "batman", "ironman"];
console.log(heros)// [ 'superman', 'batman', 'ironman' ]
let myObj = {
    name: "kausik",
    age: 22,
}
console.log(myObj) // { name: 'kausik', age: 22 }   

// const myFunction = function(){
//     console.log("Hello world");
// }

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3