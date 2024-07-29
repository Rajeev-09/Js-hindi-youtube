// date

let myDate = new Date()
// console.log(myDate.toString());//Sat Jul 20 2024 14:38:49 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Sat Jul 20 2024

// console.log(myDate.toLocaleString());//7/20/2024, 2:39:30 PM

// console.log(typeof myDate); 

//  let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate);

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getFullYear());

// console.log(`${newDate.getDate()} and the Time is ${newDate.getTime()}`);

const toLocaleDate = Date.toLocaleString('Default',{
    weekDay : "long",
    month : "short",
    minute : "2-digit",
    myDate : "date"
})

// console.log(toLocaleDate);