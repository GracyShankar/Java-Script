// Dates
// let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())

// console.log(typeof myDate )

// new Date

// let myNewDate = new Date (2023 , 0 , 3)
// let myNewDate = new Date (2023 , 0 , 3 , 5, 7)
// let myNewDate = new Date ("2023-01-21")
let myNewDate = new Date ("06-14-2023")
console.log(myNewDate.toLocaleString())

// ************************************TimeStamp**********************************************

let myTimestamp = Date.now()

console.log(myTimestamp);
console.log(myNewDate.getTime())
console.log(Math.floor(Date.now(1000)))

let newDate = new Date(2033 , 4,6);
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getTime())
//${newDate.getDay() and the time}`

console.log(newDate.toLocaleString('default' ,{ weekday:"narrow"}))
