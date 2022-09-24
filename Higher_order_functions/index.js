// Higher order functions

/* 
    Higher order functions take a function as a parameter or return a function after it is executed. Higher Order Functions perform operations on other functions.

    Higher Order Functions provide a higher level of abstraction for functions.


*/

//regular functions take primitive types as parameters. ie:

function double(n){
   console.log(n * 2);
}

double(50);
// This function takes an integer as a parameter and multiplies it by two. Simple!

//Let's make another one that takes strings as parameters:

function hello(name){
    return `Hello ${name}`
}

const sayHelloTo = hello('Hassan');

console.log(sayHelloTo)
//Output -> Hello Hassan

// Now let's use a Higher order function, array.filter(). The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Assume we have an array of names, and we want to filter those that start with "X". 

var names = ['Alexander', 'Maxime', 'Joel', 'Mehdi', 'Xavi', 'Jibril', 'Xoxo'];

// In order to filter the names that start with "X" we have to define some logic in the filter() method. Here is one way of doing it with if statements.

var filteredNames = names.filter(function(name){
    if(name[0] == "X"){
        return false;
    }

    return true;
})

console.log(filteredNames);
// This will return our array of names with all the names that start with "X" excluded.
// Output -> ['Alexander', 'Maxime', 'Joel', 'Mehdi', 'Jibril']

// In fact you can make it even shorter with an arrow function.

filteredNames = names.filter( name => name[0] !== "X" );
console.log(filteredNames)


// Without a higher order function, if I want to add one to each number in an array and display it in the console, I would do as follow:

var numbers = [1, 2, 3, 4, 5];

function addOne(array){
    for(i = 0; i < array.length; i++){
        console.log(array[i] + 1)
    }
} 

addOne(numbers);

// The function addOne() accepts an array, adds one to each number in the array, and displays it in the console. The original values remain unchanged in the array, but the function is doing something for each value.

// However, using what may be the most common higher order function, forEach(), we can simplify this process:

console.log(' ================================== line break ==================================');

numbers.forEach( number => console.log(number + 1))
// We've abstracted the function definition and call in the original code above to just one line!

// Another exemple. Without a higher order function, if I wanted to create a new array that only has the odd numbers from the numbers array, I could do the following:

var numbers = [2, 3, 4, 5, 6, 7];

function isOdd(array, oddNumbers = []){
    for(i = 0; i < array.length; i++){
        if(array[i] % 2 != 0){ 
            oddNumbers.push(array[i]);
        }
    }

    return oddNumbers
}

oddArray = isOdd(numbers);
console.log(oddArray);
// The function isOdd() accepts an array and has a second optional parameter for an array. If not provided, the array has a default value of an empty array.
// The function checks each number in the array to see if it is an odd number. If the number is odd, it adds it to the array from the second parameter. After all numbers are checked, the array from the second parameter is returned. If we use the higher order function, filter(), we can abstract so much:

console.log(' ================================== line break ==================================');

oddArray = numbers.filter( number => number % 2 !== 0);
console.log(oddArray);
//that is a big improvement. We start by defining the new array oddArray because applying filter() will create a new array. The higher order function will return each element that meets the condition set within the anonymous function it receives. The anonymous function is once again applied to each element in the numbers array.