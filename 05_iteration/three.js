// for of loops


// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {  // * It is used for value in the forof loop
    // console.log(arr);
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(greetings);
    
}

// * kha pe agar hm space ko htna h toh ky krna ho 

//& 1 Tarika 
for (const greet of greetings) {
    const removeSpace = greetings.replaceAll(" ","")
    console.log(removeSpace);  // * HelloWorld
    // console.log(`Each char is ${greet}`);
}

//& 2 Tarika
for (const greet of greetings) {
    if (greetings == "Hello World") {
        console.log(greetings.replaceAll(" ",""));
        // console.log(greetings);
    }    
}

//& 3 Tarika
for (const greet of greetings) {
    switch(greetings){
    }
        case1: " Hello World"
        console.log(greetings.replace(" ",""));
        break;
}

// Maps

const map = new Map()
// map.set('IN', 'India')
// map.set('US', 'United States')
// map.set('UK', 'United Kingdom')
// map.set('JAP',' Japan')
// map.set('JAP',' Japan') //*  like that :> there are repeated value in this map

// console.log(map);

// * to find this key value in map by the using of destructured of map

for (const [key,value] of map) { //
    // console.log(key, ':-',value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }