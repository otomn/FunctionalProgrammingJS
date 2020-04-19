let functional = require("./functional.js")
let arr = [1, 2, 3, 4]
let sub = functional.func(2, (a, b) => { return a - b })
// Create a new function called sub that takes 2 arguments
console.log(arr.map(sub(undefined, 1)))
// Subtract 1 from all element in arr, prints [0, 1, 2, 3]
console.log(arr.map(sub(100)))
// Subtract each element in arr from 100, prints [99, 98, 97, 86]
