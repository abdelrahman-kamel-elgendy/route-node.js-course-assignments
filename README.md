# Route Node.js Course — Assignments

Assignments from the **Route Node.js** course covering JavaScript fundamentals and Node.js core modules. Each assignment is a standalone ES Module script that prints formatted output to the console. Essay answers are written as JSDoc comments directly in the file.

---

## Table of Contents

- [Repository Structure](#repository-structure)
- [Setup](#setup)
- [Running](#running)
- [Assignment 1 — JavaScript Fundamentals](#assignment-1--javascript-fundamentals)
- [Assignment 2 — Node.js Core Modules](#assignment-2--nodejs-core-modules)
- [Grading Summary](#grading-summary)

---

## Repository Structure

```
route-node.js-course-assignments/   ← project root
│
├── utils/
│   └── print.js         — shared printCodingQuestion helper imported by both assignments
│
├── Assignment1/
│   ├── assignment1.js   — 15 coding questions + 5 essay answers (as JSDoc comments)
│   └── bonus.js         — Counter II (LeetCode #2665)
│
├── Assignment2/
│   ├── assignment2.js   — 17 Node.js core-module coding questions
│   └── bonus.js         — Kth Missing Positive Number (LeetCode #1539)
│
└── README.md
```

> ⚠️ `utils/` must sit at the **project root** — as a sibling of `Assignment1/` and `Assignment2/`, not inside either of them. The import path `../utils/print.js` inside each assignment file resolves one level up to the project root.

---

## Setup

**Prerequisites:** Node.js v18 or later — [download here](https://nodejs.org/).

Both assignments use ES Module syntax (`import` / `export`). Add the following `package.json` at the project root if one does not already exist:

```json
{ "type": "module" }
```

You can verify your Node.js version with:

```bash
node -v   # should print v18.x.x or higher
```

---

## Running

Run each assignment from the **project root**:

```bash
node Assignment1/assignment1.js
node Assignment2/assignment2.js
```

Each script prints a formatted block per question showing the description, input, and output:

```
Question 1
Description: Convert the string "123" to a number and add 7.
{ Input: '123' }
{ Output: 130 }
---------------------------------------------
```

---

## Assignment 1 — JavaScript Fundamentals

**File:** `Assignment1/assignment1.js`
**Total:** 10 grades + 2 bonus grades

### Part 1 — Coding Questions (7.5 grades, 15 × 0.5)

Covers the core JavaScript language features every developer needs to know.

| # | Topic | Description |
|---|-------|-------------|
| 1 | Type Conversion | Convert `"123"` to a number and add 7 |
| 2 | Truthy / Falsy | Return `"Invalid"` if a variable is falsy |
| 3 | Loop + `continue` | Print odd numbers 1–10 using `for` + `continue` |
| 4 | `filter` | Return only even numbers from an array |
| 5 | Spread Operator | Merge two arrays using `...` |
| 6 | Switch Statement | Map a number (1–7) to a day of the week |
| 7 | `map` | Return string lengths from an array |
| 8 | Functions | Check divisibility by both 3 and 5 |
| 9 | Arrow Functions | Return the square of a number |
| 10 | Destructuring | Extract object values via destructuring and return a formatted string |
| 11 | Rest Parameters | Accept multiple parameters and return their sum |
| 12 | Promises / Async | Return a promise that resolves after 3 seconds with `"Success"` |
| 13 | Math | Find the largest number in an array |
| 14 | Objects | Return an array of an object's keys |
| 15 | String Methods | Split a string into an array of words |

### Part 2 — Essay Questions (2.5 grades, 5 × 0.5)

Written answers are kept as JSDoc comments (`/** */`) in `assignment1.js` — they serve as documentation rather than executable code.

| # | Topic |
|---|-------|
| 1 | `forEach` vs `for...of` — differences and when to use each |
| 2 | Hoisting and the Temporal Dead Zone (TDZ) with examples |
| 3 | `==` vs `===` — loose vs strict equality |
| 4 | How `try-catch` works and why it matters in async operations |
| 5 | Type conversion vs type coercion with examples |

### Bonus — Counter II (LeetCode #2665) — 2 bonus grades

**File:** `Assignment1/bonus.js`

Implements a closure-based counter factory using functional programming patterns. The factory accepts an initial value and returns an object with three methods — `increment`, `decrement`, and `reset` — all sharing the same private state through a closure.

```js
const counter = createCounter(5);
counter.increment(); // 6
counter.decrement(); // 5
counter.reset();     // 5
```

**Concepts demonstrated:** closures, factory functions, stateful logic without classes.

---

## Assignment 2 — Node.js Core Modules

**File:** `Assignment2/assignment2.js`
**Total:** 10 grades + 3 bonus grades

Covers four built-in Node.js modules. Questions are grouped by module in the file.

### `path` Module — Q1 to Q9

Working with file and directory paths in a cross-platform way.

| # | Function | Task |
|---|----------|------|
| 1 | `__filename`, `__dirname` | Return the current file path and directory |
| 2 | `path.basename()` | Extract the filename from a full path |
| 3 | `path.format()` | Build a path string from a `{ dir, name, ext }` object |
| 4 | `path.extname()` | Extract the file extension from a path |
| 5 | `path.parse()` | Parse a path and return its `name` and `ext` |
| 6 | `path.isAbsolute()` | Check whether a path is absolute |
| 7 | `path.join()` | Join multiple path segments into one |
| 8 | `path.resolve()` | Resolve a relative path to an absolute one |
| 9 | `path.join()` | Join exactly two paths |

### `fs` Module — Q10, Q11, Q14–Q16

Reading, writing, and managing files and folders on the filesystem.

| # | Mode | Task |
|---|------|------|
| 10 | Async | Delete a file using `fs.unlink()` — wrapped in `try/catch` |
| 11 | Sync | Create a folder using `fs.mkdirSync()` — skips if already exists |
| 14 | Sync | Read a file's contents using `fs.readFileSync()` |
| 15 | Async | Write content to a file using `fs.writeFile()` — wrapped in `try/catch` |
| 16 | Sync | Check whether a file or folder exists using `fs.existsSync()` |

### `events` Module — Q12–Q13

Building event-driven logic with Node's `EventEmitter`.

| # | Task |
|---|------|
| 12 | Register a listener for a `"start"` event and log a welcome message |
| 13 | Emit a `"login"` event that passes a username to its listener |

### `os` Module — Q17

Accessing system-level information at runtime.

| # | Task |
|---|------|
| 17 | Return the current OS platform and CPU architecture |

### Bonus — Kth Missing Positive Number (LeetCode #1539) — 3 bonus grades

**File:** `Assignment2/bonus.js`

Finds the k-th missing positive integer from a sorted array using binary search instead of a linear scan.

**Key insight:** at any index `i`, the number of missing positive integers before `arr[i]` equals `arr[i] - (i + 1)`. Binary search finds the first index where that count reaches `k`, then the answer is derived as `left + k`.

| Case | Time Complexity |
|------|----------------|
| Binary search | O(log n) |
| Space | O(1) |

---

## Grading Summary

| Assignment | Section | Grade |
|------------|---------|-------|
| Assignment 1 | Part 1: Coding Questions (15 × 0.5) | 7.5 |
| Assignment 1 | Part 2: Essay Questions (5 × 0.5) | 2.5 |
| Assignment 1 | **Bonus:** Counter II | +2 |
| Assignment 2 | Coding Questions (17 questions) | 10 |
| Assignment 2 | **Bonus:** Kth Missing Positive Number | +3 |
| **Total** | | **25 + 5 bonus** |