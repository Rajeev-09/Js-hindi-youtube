const marvel_Heros = ["thor","Ironman","Spiderman"]
const dc_Heros = ["Superman","flash","batman"]

// marvel_Heros.push(dc_Heros)

// console.log(marvel_Heros[3][2]);

const all_heros = marvel_Heros.concat(dc_Heros)    //it can be combine the 2 arrays
// console.log(all_heros);


const all_new_heros = [...marvel_Heros,...dc_Heros]
// console.log(all_new_heros);

const another_array = [1,2,3,4,[5,6,7],8,[9,10,11,]]
const real_another_array = another_array.flat(Infinity) //it can be flat array
// console.log(real_another_array);


// console.log(Array.isArray("Rajeev"));
// console.log(Array.from("Rajeev"));

// Array.from({name : "Rajeev"})//Interesting Topic
// Interview  related topic such as they use of (from) in this topic it can show the output is empty beacuse 
// they undefined what the change in object then they show empty 





let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3));// Returns a new array from a set of elements.


