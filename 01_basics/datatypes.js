"use strict"; //treat all JS code as newer version

//alert("hello")  //we are using nodejs, not browser

let name = "Deb"
let age = 20
let isLoggedIn = true

/*
number = 2 ^ 53 (range)
bigint = for large numbers
string = "assembly of characters"
boolean = true or false
null = stand alone value (type = object)
undefined = kindda place holder for a value which is not defined yet (type = undefined)
symbol = uniquness
*/

console.log(typeof undefined) //undefined
console.log(typeof "deb"); //string
console.log(typeof null); //object

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId) //false


// Reference (Non Primitive) data types

// Array, Objects, Functions, Dates

const heros = ["shaktiman", "naagraj", "doga"]; //array 

let myObj = {
    name : "deb",
    age : 20
} //object

const myFunction = function () {
    console.log("hello world")
} //function

console.log(typeof heros)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (non-primitive)  - memory type

let myYoutubename = "sonutojo"

let anothername = myYoutubename
anothername = "Deb"

console.log(myYoutubename) //sonutojo
console.log(anothername) //Deb



let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "deb@gmail.com"

console.log(user1)
console.log(user2)