// objects vs Primitives

/* 
    In javascript everything eventually, is an instance of the object type ( string, number, function, array, ... ).

    Most importantly in js there is 2 types of values

    1. Primitives ( string, number, boolean, null, undefined )

    2. Objects ( array, functions, object, date, regex, ... )

*/

// When you assign a variable to a value in javascript, if the value is a primitive like the following exemple:

let variable = 'I am a variable' // the variable points to the string in this case. That's why
let anotherVariable = variable; // In this case the variable is ponting to the identity of it's value. In that sense they become identical. Primitives are assigned by value

console.log( anotherVariable === variable ) // This is true

let variable2 = 1;
let anotherVariable2 = 1;

console.log( anotherVariable2 === variable2 )  // This is also true 

// Since primitives are assigned by value. This means that if we change the value we'll get a different result from our exemple

variable2 = 9;

console.log( anotherVariable2 === variable2 ); // anotherVariable is actually pointing to an intenger( 1 ), but since we can't change the value of this number. We are going to assiagn variable to another value ( which is 9 in our exemple ).

console.log(variable2); // This points to 9 
console.log(anotherVariable2); // This is still pointing to the previous assignment ( 1 )

// On the other hand...
variable = [1];

anotherVariable = [1];

console.log( anotherVariable === variable )
// In this case the variable is pointing to the location where the object is stored, basically in the memory of your computer.

/*

    variable and anotherVariable are not identical because their values are objects. Each object has it's own reference and they cannot be assigned by value, instead they are assigned by reference.

    Object values can be modified. But numbers, strings, and Booleans, are all immutable.

    It's impossible to change values of primitives. You can combine them and derive
    new values from them, but when you take a specific string value, that value
    will always remain the same

    Objects work differently. You can change their properties, causing a single object value to have different content at different times.

*/


// there is a difference between having two references to the same object and having two different objects that contain the same properties.

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10}; 

console.log(object1 === object2) // This is actually true

// Even if we change the value inside the property, object1 is still going to be identical to object2 but the property itself doesn't change
object1.value = 15

console.log(object1);
console.log(object2);

// This is why object3 is different from object 1 because they have been assisgn to different references
console.log(object3 === object1)  // This is false

/* 
    The object1 and object2 bindings grasp the same object. 
    which is why changing object1 also changes the value of object2 . 
    They are said to have the same identity.

 #. The binding object3 points to a different object, which initially contains the same properties as object1 but lives a separate life.

    When you compare objects with JavaScript’s == operator, it compares by identity: 
        it will produce true only if both objects are precisely the same value.

    Comparing different objects will return false , even if they have identical properties. There is no “deep” comparison operation built into JavaScript, which compares objects by contents, but it is possible to write it yourself

*/

// Keep in mind that inside object1 is stored the reference of the object { value: 10 } , See what happens if we assign this variable to another object

object1 = {value: 12};
console.log(object1 === object2) // {value: 15} is still relevant and object2 was pointing exactly to that value ( which hsppen to be stored in object1 )

// Now that we are assigning object1 to another object which has it's own reference. It's value won't be identical to object2 and therefore they connot be compared