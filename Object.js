//single ton

// object Literal
// Object.create
// key value pair
const mysym = Symbol('key1')
const user = {
    name : 'Gracy',
    "full name" : 'Gracy Shankar',
    [mysym] : 'myKey1',
    age : 23,
    location : 'jaipur',
    email : 'gracy.google.com',
    isloggedIn : false,
    lastlogin : ['Monday ', 'Thursday']
}
// console.log(user.age)
// console.log(typeof user[mysym])
// console.log(user["full name"])
// console.log(user['email'])

user.email = " Gracy@xyz.com"
// Object.freeze(user)
user.email = " Gracy@microsoftcom"
// console.log(user)

// Functions 
user.greeting = function(){

    console.log('hello to the user')
}
user.greetingtwo = function(){

    console.log('hello to the user' , `${this.name}`)
}
console.log(user.greeting())
console.log(user.greetingtwo())

