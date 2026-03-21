// ==========================
// Assignment 1 - JavaScript
// Part 1: Coding Questions
// ==========================

var input;

// ==== Q1 ====
console.log(Number("123") + 7); // 130


// ==== Q2 ==== 
input = 0;
console.log(input ? "Valid" : "Invalid"); // "Invalid"

// ==== Q3 ====
for (let i = 1; i <= 10; i++)
    if (i % 2 != 0)
        console.log(i); // 1 3 5 7 9


// ==== Q4 ====
input = [1, 2, 3, 4, 5];
console.log(input.filter((num) => num % 2 === 0)); // [2, 4]


// ==== Q5 ====
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
console.log([...arr1, ...arr2]); // [1, 2, 3, 4, 5, 6]


// ==== Q6 ====
input = 1;
switch (input) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}


// ==== Q7 ====
input = ["a", "ab", "abc"];
console.log(input.map((str) => str.length)); // [1, 2, 3]


// ==== Q8 ====
input = 15;
function divisibleBy3(num) {
    if (num % 3 === 0 && num % 5 === 0) return "Divisible by both";
    if (num % 3 === 0) return "Divisible by 3";
    if (num % 5 === 0) return "Divisible by 5";
    return "Not divisible by 3 or 5";
}
console.log(divisibleBy3(input)); // "Divisible by both"


// ==== Q9 ====
input = 5;
const square = (num) => num * num;
console.log(square(input)); // 25


// ==== Q10 ====
input = { name: "John", age: 30 };
const destructures = ({ name, age }) => `${name} is ${age} years old`;
console.log(destructures(input)); // "John is 25 years old"


// ==== Q11. ====
const sum = (num1 = 0, num2 = 0, ...nums) => nums.reduce((acc, num) => acc + num, 0) + num1 + num2;
console.log(sum(1, 2, 3, 4, 5)); // 15


// ==== Q12 ====
const delay = () =>
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Success"), 3000));

delay().then((msg) => console.log(msg)); // "Success" (after 3 seconds)


// ==== Q13 ====
input = [1, 3, 7, 2, 4];
const largest = (arr) => Math.max(...arr);
console.log(largest(input)); // 7


// ==== Q14 ====
input = { name: "John", age: 30 };
const keys = (obj) => Object.keys(obj);
console.log(keys(input)); // ["name", "age"]


// ==== Q15 ====
input = "The quick brown fox";
const split = (str) => str.split(" ");
console.log(split(input)); // ["The", "quick", "brown", "fox"]


// ========================
// Part 2: Essay Questions
// ========================

/*
=========================
Q1: forEach vs for...of
=========================
forEach is an array method that iterates over array elements and executes
a callback for each one. It cannot be stopped with break or continue, and
it only works on arrays (and array-like objects via call/apply).

  Example:
    [1, 2, 3].forEach(num => console.log(num)); // 1  2  3

for...of is a loop that works on ANY iterable (arrays, strings, Maps, Sets,
NodeLists, generators, etc.). It fully supports break and continue.

  Example:
    for (const num of [1, 2, 3]) {
      if (num ===== 2) break;
      console.log(num); // 1
    }

When to use each:
  - Use forEach for simple side-effect operations on every array element
    when you never need to exit early.
  - Use for...of when you need break/continue, when iterating over
    non-array iterables, or when using await inside the loop
    (forEach does NOT await async callbacks properly).


=============================================
Q2: Hoisting and the Temporal Dead Zone (TDZ)
=============================================
Hoisting is JavaScript's behavior of moving declarations to the top of
their scope before execution begins.

  var is hoisted AND initialized to undefined:
    console.log(x); // undefined (no error)
    var x = 5;

  Function declarations are fully hoisted (both declaration + body):
    greet(); // "Hello"
    function greet() { console.log("Hello"); }

let and const are also hoisted but are NOT initialized. The gap between
the start of the block and their declaration line is the Temporal Dead Zone
(TDZ). Accessing them inside the TDZ throws a ReferenceError.

  Example (TDZ):
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 10;

The TDZ prevents bugs that arise from using a variable before it has a
meaningful value.


=============
Q3: == vs ===
=============
== (loose equality) compares values AFTER performing type coercion when
the operand types differ.

  Examples:
    0  == false        // true  (false coerces to 0)
    1  == "1"          // true  ("1" coerces to 1)
    null == undefined  // true  (special rule)

=== (strict equality) compares BOTH value and type with NO coercion.
If the types differ it immediately returns false.

  Examples:
    0   === false       // false (different types)
    1   === "1"         // false (different types)
    null === undefined  // false (different types)
    1   === 1           // true

Best practice: always use === to avoid unexpected coercion bugs.


==================================
Q4: try-catch and async operations
==================================
try-catch is a runtime error-handling mechanism. Code in the try block runs
normally; if an error is thrown, execution jumps to the catch block where
the error can be inspected and handled, preventing the program from crashing.

  Synchronous example:
    try {
      JSON.parse("invalid json");
    } catch (err) {
      console.log("Caught:", err.message);
    }

In async operations (network requests, file reads, timers), errors can
occur at any time. Without try-catch, a rejected Promise inside an async
function becomes an unhandled rejection and can silently break the app.

  async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Request failed:", err.message);
    }
  }

try-catch makes async error handling as clean and predictable as
synchronous error handling.


====================================
Q5: Type Conversion vs Type Coercion
====================================
Type Conversion (explicit): the developer intentionally converts a value
from one type to another using built-in functions.

  Examples:
    Number("42")    // 42     — string → number
    String(100)     // "100"  — number → string
    Boolean(0)      // false  — number → boolean
    parseInt("3.7") // 3      — string → integer

Type Coercion (implicit): JavaScript automatically converts types behind
the scenes during an operation, without the developer asking for it.

  Examples:
    "5" + 2    // "52"  — 2 is coerced to string (+ triggers concatenation)
    "5" - 2    // 3     — "5" is coerced to number (- is always numeric)
    true + 1   // 2     — true coerces to 1
    if (0) {}  // 0 coerces to false (falsy check)
*/