/*
*   Note: Random

Reassigning vs Mutating:

var:    Allows you to reassign the varibles which can lead to confusion and errors
let:    Allows you to mutate (an array or an Object) BUT you CAN NOT reassign the same variable

*   Prevent Object Mutation:

const decleration alone doesnt really protect your data from mutation. To ensure your data doesnt change, Javascript provides a function Object.freeze to prevent data mutation.

Once, the object is frozen, you can NO longer add, or delete properties from it
*/

let objHuman = {
    "name":"Kunal",
    "age":38,
    "occupation":"Programmer"
}

Object.freeze(objHuman)
objHuman.learning = "No";   /* will not do anything */

console.log(objHuman)

/*
 *  Set default parameters for your functions: in ARROW functions
 
    The default parameter kicks in when the arguement is not specified (it is undefined). for the e.g. below, the parameter name will recieve its default value "Anonymous" because NO new value is being defined
 */

 let greeting = (name="user", greetMsg="Hello")=>{
     console.log(`${name}, ${greetMsg}`)
 }

 greeting("Kunal","GoodMorning")    /* passing specified values */
 greeting()                         /* passing No values, so default values will be used */

/*
*   Use the Rest parameter with Function Parameters:
    With the Rest parameter, you can create functions that take a variable number of arguements. These arguements are stored in an array that can be accessed later from inside the function
*/
let howmany=(...arg)=>{
    console.log(`You have passed ${arg.length} arguements`)

}

howmany(2,34,[1,2,3],"Kunal")


