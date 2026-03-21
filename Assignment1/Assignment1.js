// ============================================================
//  Assignment 1 – JavaScript Fundamentals
//  Route Node.js Course
// ============================================================

import { printCodingQuestion } from "../utils/print.js";

// ============================================================
//  Part 1 – Coding Questions
// ============================================================
console.log("\n========== PART 1 CODING QUESTIONS OUTPUT ==========\n");

let input;
let output;

// == Q1. Convert the string "123" to a number and add 7 =======
input = "123";
output = Number(input) + 7;
printCodingQuestion(1, 'Convert the string "123" to a number and add 7.', input, output);

// == Q2. Return "Invalid" if the value is falsy ================
const q2 = (val) => (val ? "Valid" : "Invalid");

input = 0;
output = q2(input);
printCodingQuestion(2, 'Check if the given variable is falsy and return "Invalid" if it is.', input, output);

// == Q3. Odd numbers 1–10 using continue ======================
output = [];
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    output.push(i);
}
printCodingQuestion(3, "Use for loop to print all numbers between 1 and 10, skipping even numbers using continue.", null, output);

// == Q4. Filter even numbers ===================================
const q4 = (arr) => arr.filter((n) => n % 2 === 0);

input = [1, 2, 3, 4, 5];
output = q4(input);
printCodingQuestion(4, "Create an array of numbers and return only the even numbers using filter method.", input, output);

// == Q5. Merge two arrays with spread =========================
const q5 = (arr1, arr2) => [...arr1, ...arr2];

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
output = q5(arr1, arr2);
printCodingQuestion(5, "Use the spread operator to merge two arrays, then return the merged array.", { arr1, arr2 }, output);

// == Q6. Number → day name via switch =========================
const q6 = (n) => {
    switch (n) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid Day";
    }
};

input = 7;
output = q6(input);
printCodingQuestion(6, "Use a switch statement to return the day of the week given a number (1 = Sunday, 7 = Saturday).", input, output);

// == Q7. Return string lengths via map ========================
const q7 = (arr) => arr.map((str) => str.length);

input = ["a", "bc", "def", "gh", "i"];
output = q7(input);
printCodingQuestion(7, "Create an array of strings and return their lengths using map method.", input, output);

// == Q8. Check divisibility by 3 and 5 =======================
const q8 = (n) =>
    n % 3 === 0 && n % 5 === 0 ? "Divisible by both" : "Not divisible by both";

input = 15;
output = q8(input);
printCodingQuestion(8, "Write a function that checks if a number is divisible by 3 and 5.", input, output);

// == Q9. Square of a number (arrow function) ==================
const q9 = (n) => n * n;

input = 5;
output = q9(input);
printCodingQuestion(9, "Write a function using arrow syntax to return the square of a number.", input, output);

// == Q10. Destructure object → formatted string ===============
const q10 = ({ name, age }) => `${name} is ${age} years old`;

input = { name: "John", age: 25 };
output = q10(input);
printCodingQuestion(10, "Write a function that destructures an object to extract values and returns a formatted string.", input, output);

// == Q11. Sum of multiple parameters (rest) ===================
const q11 = (a = 0, b = 0, ...rest) =>
    a + b + rest.reduce((acc, cur) => acc + cur, 0);

input = [1, 2, 3, 4, 5];
output = q11(...input);
printCodingQuestion(11, "Write a function that accepts multiple parameters (two or more) and returns their sum.", input, output);

// == Q12. Promise that resolves after 3 s =====================
const q12 = () => new Promise((resolve) => setTimeout(() => resolve("Success"), 3000));

output = await q12();
printCodingQuestion(12, "Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.", null, output);

// == Q13. Largest number in an array ==========================
const q13 = (arr) => Math.max(...arr);

input = [1, 3, 7, 2, 4];
output = q13(input);
printCodingQuestion(13, "Write a function to find the largest number in an array.", input, output);

// == Q14. Return an object's keys =============================
const q14 = (obj) => Object.keys(obj);

input = { name: "John", age: 25 };
output = q14(input);
printCodingQuestion(14, "Write a function that takes an object and returns an array containing only its keys.", input, output);

// == Q15. Split string into words =============================
const q15 = (str) => str.split(" ");

input = "The quick brown fox";
output = q15(input);
printCodingQuestion(15, "Write a function that splits a string into an array of words based on spaces.", input, output);


// ============================================================
//  Part 2 – Essay Questions
// ============================================================

/**
 * Q1 — forEach vs for...of
 *
 * forEach:
 *   - Arrays only.
 *   - Runs a callback for every element; cannot break or continue.
 *
 * for...of:
 *   - Any iterable (array, string, Map, Set, generator…).
 *   - Supports break, continue, and return.
 *
 * Use forEach for simple side-effects over every element.
 * Use for...of when you need early exits or non-array iterables.
 */

/**
 * Q2 — Hoisting & Temporal Dead Zone (TDZ)
 *
 * Hoisting: declarations are moved to the top of their scope before execution.
 *
 *   var (hoisted, initialised to undefined):
 *     console.log(a);  // → undefined
 *     var a = 5;
 *
 *   Function declarations are fully hoisted:
 *     greet();                               // → works
 *     function greet() { console.log("hi"); }
 *
 * TDZ: let/const are hoisted but NOT initialised — accessing them before
 * their declaration throws a ReferenceError.
 *
 *   console.log(b);  // → ReferenceError
 *   let b = 10;
 */

/**
 * Q3 — == vs ===
 *
 * == (loose): converts types before comparing.
 *   "5" == 5   → true
 *
 * === (strict): compares value AND type — no conversion.
 *   "5" === 5  → false
 *
 * Best practice: always use === to avoid implicit coercion surprises.
 */

/**
 * Q4 — try-catch in async operations
 *
 * try-catch catches both synchronous throws and rejected awaited promises.
 * Without it, a rejected promise inside an async function becomes an
 * unhandled rejection that can crash a Node.js process.
 *
 *   async function fetchUser(id) {
 *     try {
 *       const data = await getUser(id);
 *       console.log(data);
 *     } catch (err) {
 *       console.error("Failed:", err.message);
 *     } finally {
 *       console.log("Done.");
 *     }
 *   }
 */

/**
 * Q5 — Type conversion vs coercion
 *
 * Conversion (explicit) — developer-controlled:
 *   Number("123") → 123
 *   String(42)    → "42"
 *   Boolean(0)    → false
 *
 * Coercion (implicit) — JavaScript-controlled:
 *   "5" + 2  → "52"  (number coerced to string)
 *   "5" - 2  → 3     (string coerced to number)
 *
 * Prefer explicit conversion — it makes intent clear and avoids surprises.
 */