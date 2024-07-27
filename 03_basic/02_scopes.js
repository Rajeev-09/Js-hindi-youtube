// var c = 100

// var is not use because the block scope value is not print outside this scope it is a problem 

let a = 300
if (true) {
    let a = 10 
    const b = 20
    // var c = 30
    // console.log("Inner: ",a);
}




// console.log(a);
// console.log(b);
// console.log(c);


// function one() {
    
//     const userName = "Rajeev Rawat"
//     function two() {
//         const website  = "youtube"
//         console.log(userName);
//     }

//     // console.log(website);
//     two()
// }

// one()

if (true) { 
    const userName = "Rajeev"
    if (true) {
        const website = " Youtube"
        // console.log(userName + website);
    }    
    // console.log(website);
}
// console.log(userName);


// ++++++++++++++++++++++++++++++++++++  intersting  +++++++++++++++++++++++++++++++++++++++++
// their are two technic for declared the function

function addone(num) {
    return num + 1;
}
addone(5)

const addTwo = function(num){
    return num +  2;
}
addTwo(8)