// const tinderUser = new Object()// It is  a singleton object
const tinderUser = {}//Non singleton object


tinderUser.id = "13ajc"
tinderUser.name = "Sindy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email :  "ajfljr@oksbi",
    fullName : {
        userName : {
            firstName : "Rajeev",
            lastName : "Rawat"
        }
    }
}

// console.log(regularUser.fullName.userName.firstName);


const obj1 = {1:"a",2:"b"}
const obj2 = {4:"b",5:"c"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);



const user = [
    {
        id: 23,
        email: "rajeevrawat210@gmail.com",
        phoneNo: 903198489740,
    },
    {
        id: 23,
        email: "rajeevrawat210@gmail.com",
        phoneNo: 903198489740,
    },
    {
        id: 23,
        email: "rajeevrawat210@gmail.com",
        phoneNo: 903198489740,
    }
]
// console.log(user[1].phoneNo);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//this syntax is used for all value put into the array of keys
// console.log(Object.values(tinderUser));//this syntax is used for all value put into the array of values
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const cousre = {
    cousre : "Js in hindi",
    Price : "999",
    cousreInstructor : "hitesh"
}

// cousre.cousreInstructor 


// How to destructured the object using this way
const {cousreInstructor : Instructor} = cousre // destructuring value h yeh

// console.log(cousreInstructor);
console.log(Instructor);

// how to show the Json that is this below

// {
//     "name" : "Rajeev",
//     "coursename" : "Js in hindi",
//     "price" : "3489",
// }


[
    {},
    {},
    {},
]