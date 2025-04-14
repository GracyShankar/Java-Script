const marvel_hero = ["thor", "ironman", "hulk"]
const dc_hero = [ "batman" , "superman" , "flash"]
// marvel_hero.push(dc_hero)
// console.log(marvel_hero)
// console.log(marvel_hero[3][1])

// concat
// all_hero = marvel_hero.concat(dc_hero)
// console.log(all_hero);

// Spread operator
const All_hero = [...marvel_hero,...dc_hero]
console.log(All_hero)
const anotherArr = [ 1,2,3,4,[4,3,5,], 3 , 3,4,[3,5,8,[3,4,6],9,4,3]]
const myrealArr = anotherArr.flat(Infinity)
console.log(myrealArr)

console.log(Array.isArray("Gracy"))

//Creates a new array from an iterable (like a string or a Set) or an array-like object
console.log(Array.from("Gracy"))
// interesting
console.log(Array.from({name : "Gracy"}))

let socore1 = 100
let socore2 = 200
let socore3 = 300
let socore4 = 400

//Creates a new array from a set of arguments
console.log(Array.of(socore1,socore2,socore3,socore4))

