// array 

const myArr = [1,2,3,4,5]
const myHeros = ["Shaktiman","Iron man"]

// console.log(myArr[2]);
let myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2);

// Method 

// myArr.push(3)//the value can added at the last at the array
// myArr.pop()//the value can remove form the last at the array

// myArr.unshift(0)//the value added in the Starting of the array
// myArr.shift()


// console.log(myArr.includes(9));//this includes is used for the value is exist or not
// console.log(myArr.indexOf(3));//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.


const newArr = myArr.join()//Adds all the elements of an array into a string, separated by the specified separator string.



// console.log(myArr);
// console.log(newArr);

// Slice and splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1,4)// The beginning index of the specified portion of the array. If start is undefined, But the end value not includes


console.log(myn1);
console.log("B ",myArr);


const myn2 = myArr.splice(2,4)//The beginning index of the specified portion of the array is remove form the heap memory and 
console.log(myn2);



