//* How to apply the for each loop of the Array and Object 

// foreach

//!  ["", "", ""]
//!  [{}, {}, {}]

const coding = ["Js",'Ruby','Cpp','Java','python']

// coding.forEach(function (item) {//*  f(x) callback ma naam nhi likte h thik h
//     console.log(item);
// })

// coding.forEach( (value) => {
//     console.log(value);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)// * kha pe referrence dena h executed nhi krna h thik h 



coding.forEach((item,index, arr)=>{
    // console.log(item,index,arr);
})


const myCoding = [
    {
        languageName:"Js",
        languageFileName:'js'
    },
    {
        languageName:"Ruby",
        languageFileName:'rb'
    },
    {
        languageName:"Cpp",
        languageFileName:'c++'
    },
    {
        languageName:"Java",
        languageFileName:'java'
    },
    {
        languageName:"python",
        languageFileName:'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})


