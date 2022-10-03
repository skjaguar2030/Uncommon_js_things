        // Arrrow functions
// The benefits of using arrow functions:

// 1st Benefit is aesthetics

/* Arrow functions can be very appealing for developpers, you have to admit they look much more nicer than factory functions or other type of javascript functions.

Arrow functions are shorter and simpler  but is limited and can't be used in all situations.

The following pattern is very common amongst developers when manipulating the dom.

first  case is a regular function:

const array = [1,2,3];

array.map(function(i){
    return <div> i </div>;
})



second  case is a much more simple way to execute the same operation with an arrow function:

const array = [1,2,3];

array.map( i => <div> i </div> )

Both functions work nicely but the inconvenience with arrow functions is that they can be hard to read, thus making code even harder to understand. Code readebility is essential in programming. Arrow functions used asmethod inside larger functions might give you a headech at first glance that's why it is advisable to use them when you necessarily need them 

*/



// 2nd Benefit is scope and the binding of "this"

/*The "this" keyword can be very complicated. There is a rule in javascript which indicates that functions other than arrow functions bind the value of the "this" keyword to a parent object.

Basically "this" keyword inside functions allows us to reuse a function and pass it arround with ease but the value of "this" changes depending on the concept it's running in.

*/
 

/* Here are some limitations to arrow functions 


    #. Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.

    #. We cannot name an arrow function as we do for the regular functions. However, if you’d like to call or reuse an arrow function, you will need to assign it to a variable.

    #. Arrow functions don't have access to the new.target keyword.

    #. Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.

    #. Arrow functions cannot be used as constructors.

    #. Arrow functions cannot use yield, within its body.

*/


const toaSalaamBilaJina = () => {
    return "Assalam alaikum";
}

// console.log(toaSalaamBilaJina());


const toaSalaam = (jina) => {
    return `Assalam alaikum, ${jina}`;
}

// console.log(toaSalaam("Hassan"));

// Arrow functions are always anonymous functions. You cannot name an arrow function and if you do you'll get an error thrown at you. Let's take the example below...

// sayHello() => {
//     console.log('Hello');
// }

// You will get the following message as a result: "Uncaught SyntaxError: Malformed arrow function parameter list"

// But in contrast if you use a normal anonymous function it should work. Consider the following example

function sayHello(){
    // console.log("Hello");
}

sayHello(); // You will get the string intered as a parameter ( Hello ) in the console

// Output: Hello



// Another thing that should be highlited is that arrow functions can't be constructors

function Mtu(jina) {
    this.name = jina;
}

const mimi = new Mtu("Jina langu");
// console.log(mimi);

// Oppositly to the example above, the one below will give us an error. Mtu2 is not a constructor thus using an arrow function to build a class is a bad idea it won't work 

/* const Mtu2 = (jina) => {
        this.name = jina
    }
    const mimi2 = new Mtu2("Jina la mtu ndani ya arrow function");
    console.log(mimi2); 

*/

// Output: "Uncaught TypeError: Mtu2 is not a constructor"

// Object methods:

var me = {
    talk: function(){
        return 'hello';
    }
}

// console.log(me.talk())
// Output: hello         // correct answer


// here we recreated the same code with an arrow function and it gives us the expected results. But arrow functions aren't best suited for being used in object methods, especially if the "this keword" is involved
var you = {
    talk: () => {
        return 'hello to you';
    }
}

// console.log(you.talk())
// Output: hello to you        // correct answer

// What's particular about the arrow function is that it doesn't bind the object with "this" keyword. Consider the following exemple

var randomVariable = {
    name: 'Juma Tatu',
    regularFunctionReturnsTheObject: function(){
        return this;
    },

    arrowFunctionReturnsTheWindowObject: () => {
        return this;
    }
}
  
// console.log(randomVariable.regularFunctionReturnsTheObject());
// When a regular function is invoked by an object, it creates a binding between the "this" keyword and the object that called it

// Fortunately ES6 allows us to write regular functions in a much shorter way. You don't have to mention the "function" keyword thus it makes it even shorter than an arrow function
var randomVariable2 = {
    name: 'Juma Tatu with a shorthand function',
    shortHandFunction(){
        return this;
    }
}

// console.log(randomVariable2.shortHandFunction());



// Oppositly to the exemple above, an arrow function will return the window object. There is no binding between the object and "this" when the arrow function is invoked
// console.log(randomVariable.arrowFunctionReturnsTheWindowObject());



// But there are exceptions to JS. arrow functions can be used in callback functions with the binding of an object and the "this" keyword.

var randomVariable3 = {
    name: 'Jimmy',
    shortHandFunction(){
        setTimeout(() => console.log(this.name), 4000)
    }
}

// console.log(randomVariable3.shortHandFunction());




// The arrow function syntax is heavily seen when using callback functions.



// The arrow function syntax is heavily seen when using callback functions. Assume you have an array of charitable people:
const charityFrom = [{name: "Ali Banat", age: 32, city:"Dubai", donation: 20000000},
{name: "Etoo Fils", age: 44, city:"Yaounde", donation: 700000},
{name: "Aisha", age: 28, city:"Tanzania", donation: 14700000},
{name: "Amina", age: 41, city:"Bujumbura", donation: 840000},
{name: "Andrew Tate", age: 36 , city:"London", donation: 1000000},
{name: "Seif al-Islam", age: 40, city:"Tripoli", donation: 500000000}];

// Array of people who gave charity that are under 40 eyars of age 
let donorsUnder40 = charityFrom.filter(function (charityFrom) {
    if (charityFrom.age < 40) {
      return true;
    }
});

//  Here is the same logic replicated using an arrow function.
let donorsUnder40WithArrows = charityFrom.filter( charityFrom => charityFrom.age < 40 )

console.log('Donors under 40' ,donorsUnder40);
console.log('Donors under 40 with arrow functions', donorsUnder40WithArrows)

const totalDonations = charityFrom.reduce(function (total, amount) {
    return total + amount.donation;
}, 0);

//  Here is the same logic replicated using an arrow function.
let totalDonationsWithArrows = charityFrom.reduce( (total, amount) => total + amount.donation, 0)

console.log(totalDonations);
console.log(totalDonationsWithArrows);
