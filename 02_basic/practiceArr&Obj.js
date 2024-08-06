//* Write a function addElementToEnd that takes an array and an element, and adds the element to the end of the array.

 
// arr = [1,2,3,4,5,6]
// function addElementToEnd(element) {
//   let newArr = arr.push(element)
//   console.log(arr);
//   return newArr;
// }
// addElementToEnd(8)



//* Write a function removeLastElement that takes an array and removes the last element from the array.

 
// arr = [1,2,3,4,5,6]
// function removeElementToEnd(element) {
//   let newArr = arr.pop(element)
//   console.log(arr);
//   return newArr;
// }
// removeElementToEnd(8)

//* Write a function addElementToStart that takes an array and an element, and adds the element to the beginning of the array.
 
// arr = [1,2,3,4,5,6,7]

function addElementToStart(element) {
  let addElement = arr.shift(element)
  console.log(arr);
  return arr
}
// addElementToStart(8)


//* Write a function removeFirstElement that takes an array and removes the first element from the array.


arr = [1,2,3,4,5,6,7]

function addElementToStart(element) {
  let leftElement = arr.unshift(9)
  // console.log(leftElement);
  // console.log(arr);
  
  return leftElement
}
addElementToStart()

//* Write a function checkElementExistence that takes an array and an element, and returns true if 
//* the element exists in the array, otherwise returns false.

// arr = [1,2,3,4,5,6,7]

function checkElementExistence(exists) {
  let existingElement = arr.includes(exists)
  console.log(existingElement);
  return existingElement;  
}
// checkElementExistence("he")



//* Write a function findElementIndex that takes an array and an element, and returns the index of the first occurrence of the
//  element in the array. If the element is not present, return -1.

// arr = [1,2,3,4,5,6,7]


function findElementIndex(arr,find) {
  let findElement = arr.findIndex(element => element === find);
  // console.log(findElement)
  return findElement;
}
findElementIndex(arr,1)


//* Write a function convertArrayToString that takes an array and returns a string where all elements of the array are joined by a comma.


arr = [1,2,3,"hi"]

function convertArrayToString(convert) {
  let convertArray = arr.toString(convert)
  // console.log(convertArray);
  // console.log(typeof convertArray);
  return convertArray;
} 

//* Write a function sliceArray that takes an array and two indices, and returns a new array that is
//  a slice of the original array from the first index to the second index (excluding the second index).

arr = [1,2,3,4,5,6,7]
function sliceArray(start, end) {
  let slice = arr.slice(start,end);
  // console.log(slice); 
  // console.log(arr);
  return slice
}

//* Write a function spliceArray that takes an array, a starting index, and a number of elements
//  to remove, and returns an array containing the removed elements.

arr = [1,2,3,4,5,6,7]
function spliceArray(start, end) {
  let splice = arr.splice(start,end);
  // console.log(splice); 
  // console.log(arr);
  return splice
}
// spliceArray(2,5)



//* Write a function replaceSplicedElements that takes an array, a starting index
//* a number of elements to remove, and a list of elements to add. The function should replace
//* the removed elements with the new elements and return the modified array.

arr = [1,2,3,4,5,6,7]

function replaceSplicedElements(add) {
    let hi = arr.shift()
    let bye = arr.unshift(add)
    console.log(bye);
    let newArr = is.Array(bye)
}

replaceSplicedElements(2)












































