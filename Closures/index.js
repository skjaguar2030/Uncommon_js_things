// Closures

// The ability to treat functions as values, combined with the fact that localbindings are re-created every time a function is called, brings up an interesting question. What happens to local bindings when the function call that created them is no longer active?

// being able to reference a specific instance of a local binding in an enclosing scope—is called closure. In other words, closure is created when a child function keep the environment of the parent scope even after the parent function has already executed


function multiplyBy(factor){
    return number => number * factor;
}

let twice = multiplyBy(2);

console.log(twice(10));

// In programming languages, closures (also lexical closures or function closures) are techniques for implementing lexically scoped name binding in languages with first-class functions. Operationally, a closure is a record storing a function[a] together with an environment:[1] a mapping associating each free variable of the function (variables that are used locally, but defined in an enclosing scope) with the value or reference to which the name was bound when the closure was created.[b]       -Wikipedia




function multiplier(factor) {
    return number => number * factor;
}

 twice = multiplier(2);
console.log(twice());