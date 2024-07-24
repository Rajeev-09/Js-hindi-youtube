function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("V");
}
// sayMyName // that is a reference 
// sayMyName()//that is a exeution

function addTwoNumbers(num1,num2){// num1 and num2 is a parameter 
    // console.log(num1 + num2);
}
// const result = addTwoNumbers(2,null)// the call of function that put into like a value that is a argument 
// console.log("Result: ", result);//they show the undefined

function addTwoNumbers(num1,num2){// num1 and num2 is a parameter 
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}
const result = addTwoNumbers(1,8)
// console.log("Result: ", result)


function userNameMessage(userName = "sam") {
    if (userName === undefined) {
        console.log("Please Enter the username");
        return
    }
    return `${userName} just login in`;
}

// console.log(userNameMessage("Rajeev"));
console.log(userNameMessage());//output value is undefined
