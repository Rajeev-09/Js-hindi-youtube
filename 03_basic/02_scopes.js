// var c = 100

// var is not use because the block scope value is not print outside this scope it is a problem 

let a = 300
if (true) {
    let a = 10 
    const b = 20
    // var c = 30
    console.log("Inner: ",a);
}




console.log(a);
// console.log(b);
// console.log(c);