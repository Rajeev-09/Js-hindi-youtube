// for loop


// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }


for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        // console.log("5 is best number");
    }
    // console.log(i);
}

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner Loops: ${i} and inner loop value ${i}`);
//     }
//     console.log(`Outer Loops: ${i}`);
// }   


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loops: ${i}`);
    for (let j = 1; j < 10; j++) {
    //    console.log(i+ '*' + j + "=" + i*j );
    }
}    

let myArr = ["Flash", "Batman", "superman"]
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    // const element = myArr[index];
    // console.log(element);
}

// break and continue


for (let index = 1; index <= 20; index++) {
    if (index == 5) { 
        // console.log(`Detected 5`);
        break;                    // * break ma value vhi stop ho jti h
    }
    // console.log(`Value of i is ${index}`);
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) { 
        console.log(`Detected 5`);
        continue;                  //* ma ek bar ke liye value skipp ho jti h
    }
    console.log(`Value of i is ${index}`);
}