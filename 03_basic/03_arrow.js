const user = {
    username: "Rajeev",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
};
// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// Interview Question : that broWser ke ander global object Window hota h



// function chai(){                  //this f(X) is undefined becaz this keyWord used in only object
//     const username =  "Rajeev"
//     console.log(this.username);      
// }
// chai()

const chai =  () => {
    const username = "Rajeev"
    console.log(this.username);
}
// chai()



//! Arrow function 
//* Explicity Return that mean use of return keyWord that is emplicit return



// const addTwo = (num1,num2) => {
//     return num1 + num2;
// } 

//* Implicity Return given below that mean don't use of return keyWord that is not use in implicit

// const addTwo = (num1,num2) => num1 + num2;
// const addTwo = (num1,num2) => (num1 + num2); //* agar hm sirf bracs ke use krta hn toh return use nhi kr skte thik h
//* baki cruly bracs ma toh use hta h return likna hi pd gya

// agar hm implicity object create krn h toh tab hmko 
const addTwo = (num1,num2) => ({username:"RAjeev"})

console.log(addTwo(2,4));

const myArr = [2,4,6,1,7]
myArr.forEach(() => ({}));
myArr.forEach(() => {})