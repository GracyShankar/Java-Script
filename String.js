const name = "John"
const repoCount = 10
//console.log(name + repoCount)

// Back Text
console.log(`HElLO my name is ${name} and my repoCount is ${repoCount}`)

// Declare the string
const gameName  = new String("copycat pick me yo")

console.log(gameName[0])
console.log(gameName.__proto__ )
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString)

const newString2 = gameName.slice(-6,4)
console.log(newString2)

const newString3 = "     asafesdgfdsvdfd     "
console.log(newString3)
// Trim  removes the starting and ending space
// TrimStart and TrimEnd
console.log(newString3.trim())

const url = "https://www.gmail.com// gracy%20singh"
console.log(url)
console.log(url.replace("%20", "-"))

console.log(url.includes("gracy"))

console.log(gameName.split(""))