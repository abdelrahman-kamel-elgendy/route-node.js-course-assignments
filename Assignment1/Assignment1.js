// Part 1 - Coding Questions
console.log("\n========== PART 1 CODING QUESTIONS OUTPUT ==========\n");
var Input; // used as an input for  each question.
var Output; // //used as an output for  each question.
// ===========================================================================================

// 1. Convert the string "123" to a number and add 7
Input = "123";
let convertedNumber = Number(Input);
Output = convertedNumber + 7;
printCodingQuestion(1, "Convert the string \"123\" to a number and add 7.", Input, Output);
// ===========================================================================================

// 2. Check if the given variable is falsy and return "Invalid" if it is
Input = 0;
printCodingQuestion(2, "Check if the given variable is falsy and return \"Invalid\" if it is.", Input, Input ? "Valid" : "Invalid");
// ===========================================================================================

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
Output = [];
for (let index = 0; index < 10; index++)
    if (index % 2 != 0)
        Output.push(index);
printCodingQuestion(3, "Use for loop to print all numbers between 1 and 10, skipping even numbers using continue.", null, Output);
// ===========================================================================================

// 4. Create an array of numbers and return only the even numbers using filter method.
Input = [1, 2, 3, 4, 5];
Output = Input.filter(num => num % 2 === 0);
printCodingQuestion(4, "Create an array of numbers and return only the even numbers using filter method.", Input, Output);
// ===========================================================================================

// 5. Use the spread operator to merge two arrays, then return the merged array
let Input1 = [1, 2, 3];
let Input2 = [4, 5, 6];
Output = [...Input1, ...Input2];
printCodingQuestion(5, "Use the spread operator to merge two arrays, then return the merged array.", Input = { Input1, Input2 }, Output);
// ===========================================================================================

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).
Input = 7;
switch (Input) {
    case 1: Output = "Sunday"; break;
    case 2: Output = "Monday"; break;
    case 3: Output = "Tuesday"; break;
    case 4: Output = "Wednesday"; break;
    case 5: Output = "Thursday"; break;
    case 6: Output = "Friday"; break;
    case 7: Output = "Saturday"; break;
    default: Output = "Invalid Day";
}
printCodingQuestion(6, "Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).", Input, Output);
// ===========================================================================================

// 7. Create an array of strings and return their lengths using map method.
Input = ["a", "bc", "def", "gh", "i"];
Output = Input.map(str => str.length);
printCodingQuestion(7, "Create an array of strings and return their lengths using map method.", Input, Output);
// ===========================================================================================

// 8. Write a function that checks if a number is divisible by 3 and 5.
function checkDivisible(number) {
    return (number % 3 === 0 && number % 5 === 0) ? "Divisible by both" : "Not divisible by both";
}
Input = 15;
Output = checkDivisible(Input);
printCodingQuestion(8, "Write a function that checks if a number is divisible by 3 and 5.", Input, Output);
// ===========================================================================================

// 9. Write a function using arrow syntax to return the square of a number.
const square = (num) => num * num;
Input = 5;
Output = square(Input);
printCodingQuestion(9, "Write a function using arrow syntax to return the square of a number.", Input, Output);
// ===========================================================================================

//  10. Write a function that destructures an object to extract values and returns a formatted string.
const formatPerson = (person) => `${person.name} is ${person.age} years old`;
Input = { name: 'John', age: 25 };
Output = formatPerson(Input);
printCodingQuestion(10, "Write a function that destructures an object to extract values and returns a formatted string.", Input, Output);
// ===========================================================================================

// 11. Write a function that accepts multiple parameters(two or more) and returns their sum. 
const sum = (a = 0, b = 0, ...args) => a + b + args.reduce((acc, current) => acc + current, 0);
Input = [1, 2, 3, 4, 5];
Output = sum(...Input);
printCodingQuestion(11, "Write a function that accepts multiple parameters(two or more) and returns their sum.", Input, Output);

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
function delay() {
    let counter = 3;
    const countdown = setInterval(() => {
        console.log(`${counter} seconds remaining...`);
        counter--;
    }, 1000);

    return new Promise((resolve) => {
        setTimeout(() => {
            clearInterval(countdown); // Stop the countdown
            console.log('Done!');
            resolve('Success');
        }, 3000);
    });
}
printCodingQuestion(12, "Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.", null, await delay());
// ===========================================================================================

// 13. Write a function to find the largest number in an array. 
const largestNumber = (arr) => Math.max(...arr);
Input = [1, 3, 7, 2, 4];
Output = largestNumber(Input);
printCodingQuestion(13, "Write a function to find the largest number in an array", Input, Output);
// ===========================================================================================

// 14. Write a function that takes an object and returns an array containing only its keys. 
const personKeys = (person) => Object.keys(person);
Input = { name: 'John', age: 25 };
Output = personKeys(Input);
printCodingQuestion(14, "Write a function that takes an object and returns an array containing only its keys.", Input, personKeys(Input));
// ===========================================================================================

// 15. Write a function that splits a string into an array of words based on spaces. 
const splitter = (str) => str.split(" ");
Input = "The quick brown fox";
Output = splitter(Input);
printCodingQuestion(15, "Write a function that splits a string into an array of words based on spaces.", Input, Output);
// ===========================================================================================





// Part 2 - Essay Questions
console.log("\n\n\n========== PART 2 ESSAY QUESTIONS ==========\n");
var Question; // //used as an output for  each question.
var Answer; // used as an input for  each question.
// ===========================================================================================

// 1. What is the difference between forEach and for...of ? When would you use each ?
Question = "What is the difference between forEach and for...of ? When would you use each ?";
Answer =
    `forEach :
- Used only with arrays.
- Executes a callback function for each element.
- Cannot use break or continue.
- Does not return a new array.

for...of:
- Works with any iterable(arrays, strings, maps, sets).
- Allows break, continue, and return.
- More flexible and readable in many cases.

Use forEach when you just want to execute a function for every element.
Use for...of when you need more control over the loop.`;
printEssayQuestion(1, Question, Answer);
// ===========================================================================================

// 2. What is hoisting and what is the Temporal Dead Zone(TDZ) ? Explain with examples.
Question = "What is hoisting and what is the Temporal Dead Zone(TDZ) ? Explain with examples.";
Answer =
    `Hoisting: JavaScript moves variable and function declarations to the top of their scope before execution.
Example:
    console.log(a);
    var a = 5;
Output: undefined

TDZ(Temporal Dead Zone): Variables declared with let and const cannot be accessed before initialization.
Example:
    console.log(b);
    let b = 10;
This causes a ReferenceError because b is in the TDZ.`;
printEssayQuestion(2, Question, Answer);
// ===========================================================================================

// 3. What are the main differences between == and ===?
Question = "What are the main differences between == and ===?";
Answer =
    `== (loose equality): Compares values after type conversion.
Example: "5" == 5 -> true

=== (strict equality): Compares value AND type.
Example: "5" === 5 -> false

Best practice: Always use === to avoid unexpected behavior.`;
printEssayQuestion(3, Question, Answer);
// ===========================================================================================

// 4. Explain how try-catch works and why it is important in async operations.
Question = "Explain how try-catch works and why it is important in async operations.";
Answer =
    `try-catch is used to handle errors in code.
In async operations, try-catch is important because:
- Promises may reject.
- Async / await requires try-catch to handle errors.

Example:
try {
    const data = await fetchData();
} catch (error) {
    console.log(error);
}`;
printEssayQuestion(4, Question, Answer);
// ===========================================================================================

// 5. What’s the difference between type conversion and coercion ? Provide examples of each.
Question = "What’s the difference between type conversion and coercion ? Provide examples of each."
Answer =
    `Type Conversion:
Manual conversion done by the programmer.
Example:
Number("123") -> 123

Coercion:
Automatic type conversion done by JavaScript.
Example:
"5" + 2 = "52"

Conversion is explicit.
Coercion is implicit.`;
printEssayQuestion(5, Question, Answer);
// ===========================================================================================




// function to print coding questions
function printCodingQuestion(questionNumber, description, Input, Output) {

    console.log(`Question ${questionNumber}`);
    console.log("Description:", description);

    // Format input properly
    if (Input === null || Input === undefined)
        console.log("{ Input: No input }");

    else
        console.log({ Input });

    console.log({ Output });
    console.log("---------------------------------------------\n");
}

// function to print essay questions
function printEssayQuestion(questionNumber, Question, Aswer) {
    console.log(`Question ${questionNumber}: ${Question}`);
    console.log(Aswer);
    console.log("---------------------------------------------\n");
}
