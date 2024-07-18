// there are two type of datatype is that mean how can be access the data from memory management and put into the data

// primitive Datatype

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 9007199254740991n;

// Refrence(Non Primitive)

// Array, Objects, Functions, 

const heros = ["Shaktiman","Naagraj","doga"]

{
    name:"Rajeev";
    age:21;
}

const myFunction = function () {
    console.log("Hello World");
}

// console.log(myFunction);
// console.log(typeof myFunction);
// agar function ka typeof nklte hn toh voh object f(x) hota h object f(x)





// js is a dynamic type language that mean it not introduce the type 








// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive), 
// Heap (Non-Primitive) koi bhi update or change voh original value ma hota h

let myName = "Rajeev Rawat"
let anotherName = myName
anotherName = "Ayush Rawat"

console.log(myName);
console.log(anotherName);


let userOne = {
    Email : "user@gmail.com",
    upi : "user@oksbi"
}

let anotherUser = userOne

anotherUser.Email = "rajeevrawat210@gmail.com"

console.log(userOne.Email);
console.log(anotherUser.Email);