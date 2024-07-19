const name = "Rajeev"
const repoCount = 30

// console.log(name + repoCount + "Value");

// String Interpolation method h yeh

console.log(`Hello my name is ${name}, and my repo Count is ${repoCount}`);


let gameName = new String('RajeevRR')
console.log(typeof gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('v'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4) 
console.log(anotherString);

const newStringOne = "    Rajeev     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rajeev.com/rajeevrawat*210@gmail.com"
console.log(url.replace('*210@gmail.com','.github.dev'));
console.log(url.includes('rajeev'));

