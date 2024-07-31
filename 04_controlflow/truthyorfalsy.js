const userEmail = []


// if (userEmail) {
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user Email");
// }


// ! Interview Portion

// * falsy value

// false, 0, -0, bigInt 0n, "", null and undefined, NaN 

// *truthy value

// true, 1, "0", 'fasle', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}


const emptyObject = {}
 if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
 }



// Nullish coalescing Operator (??) null ,undefined  // * it is used in a error related problem 

let val1;
// val1 = 5 ?? 10 //* output is 5
// val1 = 10 ?? null //* output is 10
// val1 = undefined ?? 15 //* output is 15
val1 = null ?? 20 ?? 15 //* output is 20


console.log(val1);


//  Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")