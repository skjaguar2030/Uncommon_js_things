        // Arrrow functions
// The benefits of using arrow functions:

// 1st Benefit is aesthetics

/* Arrow functions can be very appealing for developpers, you have to admit they look much more nicer than factory functions or other type of javascript functions.

Arrow functions are shorter and simpler  but is limited and can't be used in all situations.  */



// 2nd Benefit is scope and the binding of "this"



const toaSalaamBilaJina = () => {
    return "Assalam alaikum";
}

console.log(toaSalaamBilaJina());


const toaSalaam = (jina) => {
    return `Assalam alaikum, ${jina}`;
}

console.log(toaSalaam("Hassan"));

// Arrow functions are always anonymous functions. You cannot name an arrow function and if you do you'll get an error thrown at you. Let's take the example below...

// sayHello() => {
//     console.log('Hello');
// }

// You will get the following message as a result: "Uncaught SyntaxError: Malformed arrow function parameter list"

// But in contrast if you use a normal anonymous function it should work. Consider the following example

function sayHello(){
    console.log("Hello");
}

sayHello(); // You will get the string intered as a parameter ( Hello ) in the console

// Output: Hello



// Another thing that should be highlited is that arrow functions can't be constructors because they can't be named. ie...

function Mtu(jina) {
    this.name = jina;
}

const mimi = new Mtu("Jina langu");
console.log(mimi);

// Oppositly to the example above, the one below will give us an error. Mtu2 is not a constructor thus using an arrow function to build a class is a bad idea it won't work 

const Mtu2 = (jina) => {
    this.name = jina
}
const mimi2 = new Mtu2("Jina la mtu ndani ya arrow function");

// Output: "Uncaught TypeError: Mtu2 is not a constructor"
