// Objects can create as a 2 ways, 1:> Construtor     2:> Literal

// these are own word Create an Object is called a singleton//yeh apni trah ka ek hi object h

// they doesn't make a Single when they using a literal 
// construtor make the Singleton

// Object literal 


const mySym = Symbol("Key1")

const Jsuser = {
    name : "Rajeev",
    age : "18",
    [mySym] : "mykey1",
    location : "Srinagar",
    email : "rajeevrawat210@gmail.com",
    isLoggedIn : "false",
    lastLoginday : ["Monday","Tuesday","Friday"]
}



// console.log(Jsuser.email);
// console.log(Jsuser["email"]);// behind the scene object like as email, name is using like as a string 
// then they show error 
// console.log(Jsuser[mySym]);

// Interview  like questions 
// Take a symbol then they added in the object key and print the value  
// Ans : Using the []brace then they print like as a symbol

Jsuser.age = "22"
// Object.freeze(Jsuser)//Prevents the modification of existing property attributes and values, 
// and prevents the addition of new properties.
// console.log(Jsuser);

Jsuser.greeting = function () {
    // console.log("Hello Js User");  
}

Jsuser.greetingtwo = function () {
    // console.log(`Hello Js User, ${this.name}`);  
}

// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingtwo());



// Create multiple symbols and add them as keys to an object.
//  Write a function to log all symbol-keyed properties.


