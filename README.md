# Route Node.js Course Assignments

This repository contains assignments from the Route Node.js course, demonstrating fundamental JavaScript concepts and Node.js core modules.

## Repository Structure

```
route-node.js-course-assignments/
├── Assignment1/
│   ├── Assignment1.js     - 15 coding questions + 5 essay questions
│   └── bonus.js           - Bonus challenge: Counter II (LeetCode)
└── Assignment2/
    ├── Assignment2.js     - 17 Node.js core modules coding questions
    └── bonus.js           - Bonus challenge: Kth Missing Positive Number (LeetCode)
```

---

## Assignment 1

### Assignment1.js — JavaScript Fundamentals (10 Grades)

#### Part 1: Coding Questions (7.5 Grades — 15 questions × 0.5)

| # | Topic | Description |
|---|-------|-------------|
| 1 | Type Conversion | Convert `"123"` to a number and add 7 |
| 2 | Truthy/Falsy | Return `"Invalid"` if a variable is falsy |
| 3 | Loop Control | Print odd numbers 1–10 using `for` + `continue` |
| 4 | Array Methods | Filter even numbers using `filter()` |
| 5 | Spread Operator | Merge two arrays with `...` spread syntax |
| 6 | Switch Statement | Map a number (1–7) to a day of the week |
| 7 | Array Methods | Return string lengths using `map()` |
| 8 | Functions | Check divisibility by both 3 and 5 |
| 9 | Arrow Functions | Return the square of a number |
| 10 | Destructuring | Extract object values into a formatted string |
| 11 | Rest Parameters | Accept multiple parameters and return their sum |
| 12 | Promises / Async | Return a promise that resolves after 3 seconds |
| 13 | Math | Find the largest number in an array |
| 14 | Objects | Return an array of an object's keys |
| 15 | String Methods | Split a string into an array of words |

#### Part 2: Essay Questions (2.5 Grades — 5 questions × 0.5)

1. `forEach` vs `for...of` — differences and use cases
2. Hoisting and the Temporal Dead Zone (TDZ) with examples
3. `==` vs `===` — loose vs strict equality
4. `try-catch` in synchronous and async operations
5. Type conversion vs type coercion with examples

### bonus.js — Counter II (LeetCode) — 2 Bonus Grades

A functional programming exercise implementing a closure-based counter factory.

```js
const myCounter = createCounter(5);
myCounter.increment(); // 6
myCounter.decrement(); // 5
myCounter.reset();     // 5
```

**Concepts demonstrated:** Closures, factory functions, returning objects with methods, stateful logic without classes.

---

## Assignment 2

### Assignment2.js — Node.js Core Modules (10 Grades)

#### Coding Questions (17 questions)

**`path` Module** (Questions 1–9)

| # | Function Used | Task |
|---|---------------|------|
| 1 | `__filename`, `__dirname` | Log current file path and directory |
| 2 | `path.basename()` | Extract filename from a path |
| 3 | `path.format()` | Build a path from an object |
| 4 | `path.extname()` | Get the file extension |
| 5 | `path.parse()` | Extract `name` and `ext` from a path |
| 6 | `path.isAbsolute()` | Check if a path is absolute |
| 7 | `path.join()` | Join multiple path segments |
| 8 | `path.resolve()` | Resolve a relative path to absolute |
| 9 | `path.join()` | Join exactly two paths |

**`fs` Module** (Questions 10–11, 14–16)

| # | Mode | Task |
|---|------|------|
| 10 | Async | Delete a file using `fs.unlink()` |
| 11 | Sync | Create a folder using `fs.mkdirSync()` |
| 14 | Sync | Read a file using `fs.readFileSync()` |
| 15 | Async | Write to a file using `fs.writeFile()` |
| 16 | Sync | Check file/folder existence with `fs.existsSync()` |

**`events` Module** (Questions 12–13)

| # | Task |
|---|------|
| 12 | Listen for a `"start"` event and log a welcome message |
| 13 | Emit a `"login"` event with a username parameter |

**`os` Module** (Question 17)

| # | Task |
|---|------|
| 17 | Return OS platform and CPU architecture |

### bonus.js — Kth Missing Positive Number (LeetCode) — 3 Bonus Grades

Finds the k-th missing positive integer from a sorted array using an optimized binary search.

**Algorithm:** At any index `i`, the count of missing positive integers before `arr[i]` is `arr[i] - (i + 1)`. Binary search locates the first index where that count reaches `k`, then derives the answer as `left + k`.

**Optimizations applied:**
- **O(1) early exit** — if `k < arr[0]`, return `k` immediately
- **O(1) early exit** — if `k` exceeds total missing numbers in the array, compute directly
- **Bitwise floor division** — `(left + right) >>> 1` replaces `Math.floor((left + right) / 2)`

| Case | Complexity |
|------|------------|
| Early exits | **O(1)** |
| Binary search (middle case) | **O(log n)** |
| Space | **O(1)** |

---

## Running the Code

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system

### Execution

**Assignment 1** (CommonJS):
```bash
node Assignment1/Assignment1.js
node Assignment1/bonus.js
```

**Assignment 2** (ES Modules — requires `"type": "module"` in `package.json` or `.mjs` extension):
```bash
node Assignment2/Assignment2.js
node Assignment2/bonus.js
```

**Test the Assignment 1 counter interactively:**
```bash
node
> const { createCounter } = await import('./Assignment1/bonus.js');
> const myCounter = createCounter(5);
> myCounter.increment();  // 6
> myCounter.decrement();  // 5
> myCounter.reset();      // 5
```

---

## Grading Summary

| Assignment | Section | Grade |
|------------|---------|-------|
| Assignment 1 | Part 1: Coding Questions (15 × 0.5) | 7.5 |
| Assignment 1 | Part 2: Essay Questions (5 × 0.5) | 2.5 |
| Assignment 1 | Bonus: Counter II | +2 |
| Assignment 2 | Coding Questions (17 questions) | 10 |
| Assignment 2 | Bonus: Kth Missing Positive Number | +3 |

---

## Learning Objectives

By completing these assignments, you will understand:

- JavaScript fundamentals: type system, operators, control flow, and array methods
- Functional programming: closures, higher-order functions, and factory patterns
- Asynchronous programming: Promises and `async`/`await`
- Node.js core modules: `path`, `fs`, `events`, and `os`
- File system operations (synchronous and asynchronous)
- Event-driven architecture with `EventEmitter`
- Algorithmic thinking: binary search and index-based gap analysis

---

## Notes

- Assignment 1 uses CommonJS module syntax
- Assignment 2 uses ES Module syntax (`import` / `export`) — ensure your `package.json` includes `"type": "module"`
- All solutions follow JavaScript best practices and are well-commented for learning purposes