### Functional Programming JS

## What does it do
We know js has a lot of support for functional programming. 
Like  
```javascript
[1, 2, 3].map( (v) => { return v - 1 })
```
Which basically means generate a new array by subtracting 1 from each element  
But that function is a little bit too complicated, and is not so convenient 
if you plant to call it multiple times with different value. 
It would look like this:  
```javascript
[1, 2, 3].map( (v) => { return v - 1 })  
[1, 2, 3].map( (v) => { return 2 - v })  
[1, 2, 3].map( (v) => { return v - 3 })
```
With this library, you can define a new subtract function
by calling the function `func(arc, yourFunction)` like so  
```javascript
let functional = require("./functional.js")  
let sub = functional.func(2, (a, b) => { return a - b })
```
This function can work just like the normal subtraction function:  
```javascript
sub(2, 1) // prints 1
```
But you can also create function template with it:  
```javascript
let subFrom1 = sub(1) // create a new function that subtracts any number from 1  
subFrom1(1) // prints 0
subFrom1(2) // prints -1
let sub1 = sub(undefined, 1) // create a new function that subtracts 1
sub1(1) // prints 0
sub1(2) // prints 1
```
With this new tool, the second example can be simplified into:  
```javascript
[1, 2, 3].map(sub(undefined, 1))  
[1, 2, 3].map(sub(2))  
[1, 2, 3].map(sub(undefined, 3))]
```
Note that if you want to leave an argument as undefined, 
you will need to use the keyword `undefined`, not `null`

## Usage
Import using  
```javascript
let functional = require("./functional.js")
```
Define a new function using  
```javascript
let newFunction = functional.func(#numberOfArguments, #OldFunction)
```
