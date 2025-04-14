//arrays
const myArray = [1,2,3,4,5,6 ]
const myHeros = ['spiderman','ironman','batman'] 
const array2 = new Array(1,2,3,4,5)
//console.log(myArray[0])
// it make shallow copy 
// shallow copy of the object whose properties share the same  
// reference (point to underlying values) are those of the source object for, which the copy was made

/************************************************Methods********************************************************** */
// myArray.push(7)// add  to the end of the array
// console.log(myArray)
// myArray.push(8)
// console.log(myArray)

// myArray.pop()// remove the last element of the array

// myArray.unshift(0)

// console.log(myArray)//add to the beggining of the array

// myArray.shift()
//console.log(myArray)// remove the first element of the array

// console.log(myArray.includes(9))
// console.log(myArray)

// const newArr = array2.join()
// console.log(myArray)
// console.log(newArr)
// console.log(typeof myArray)
// console.log(typeof newArr)

/******************************************** Slice  , Splice ***************************************/

console.log('A' , myArray)
const myn1 = array2.slice(1,3)
console.log('z',array2)
console.log('B ' , myn1)

const myn2 = myArray.splice(1,3)
console.log('C',myn1)
console.log(myn2)