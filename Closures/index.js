// Closures

// The ability to treat functions as values, combined with the fact that localbindings are re-created every time a function is called, brings up an interesting question. What happens to local bindings when the function call that created them is no longer active?

// being able to reference a specific instance of a local binding in an enclosing scope—is called closure. In other words, closure is created when a child function keep the environment of the parent scope even after the parent function has already executed

// a closure gives you access to an outer function's scope from an inner function. 

function init() {
    var name = 'Biamillah';

    function displayName() {
      console.log(name); 
    }

    displayName();
}
init();
  
// init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().


// Here's a slightly more interesting example—a makeAdder function:
function makeAdder(x) {

    return function (y) {
      return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(5)); // 7
console.log(add10(100)); // 12

// In this example, we have defined a function makeAdder(x), that takes a single argument x, and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.

// In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.
  


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
console.log(twice(5));








function makeFunc() {
    const name = 'Bismillah Rahman Rahim';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  

//   Running this code has exactly the same effect as the previous example of the init() function above. What's different (and interesting) is that the displayName() inner function is returned from the outer function before being executed.

//   At first glance, it might seem unintuitive that this code still works. In some programming languages, the local variables within a function exist for just the duration of that function's execution. Once makeFunc() finishes executing, you might expect that the name variable would no longer be accessible. However, because the code still works as expected, this is obviously not the case in JavaScript.
  
//   The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log.



function human(name){

    // var name;

    function sayHi(){
    console.log(`Assalam Alaikum I am ${name}`)
    }

    function sayHowYouFeel(){
        console.log(`${name} is feeling good`)
    }

    sayHi();
    sayHowYouFeel();

}

human('Ira');

console.log(' ==================================== break line ====================================')

// Here we see that the human() function can be used for multiple humans

const Hassan = human('Hassan');
console.log(' ==================================== break line ====================================')
const Hussein = human('Hussein');