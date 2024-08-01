// for of loops


// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"  // * kha pe agar hm space ko htna h toh ky krna ho 
for (const greet of greetings) {
    if (greetings == "") {   
        console.log('spaceDetected');
        break;
    }
    // console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('JAP',' Japan')
map.set('JAP',' Japan') //*  like that :> there are repeated value in this map

// console.log(map);

// * to find this key value in map by the using of destructured of map

for (const [key,value] of map) { //
    console.log(key, ':-',value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }