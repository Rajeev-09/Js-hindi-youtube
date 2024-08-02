//* How to apply the for in loop of the Objects

const myObject = {
    js: 'Javascript',
    py: 'Python',
    cpp: 'C++',
    rb: 'ruby'
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["Js",'Ruby','Cpp','Java','python']
// * It is used for value forof loop
// * It is used for key forin loop 

for (const key in programming) {    
    // console.log(programming[key])
}


const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('JAP',' Japan')
map.set('JAP',' Japan') //*  like that :> there are repeated value in this map

for (const key in map) {
    console.log(key);
}