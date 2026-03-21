# 📚 Route – Node.js Assignments

Solutions for the **Route** Node.js track assignments.  
Each assignment lives in its own folder and contains two files: the main solution and the bonus.

---

## 📁 Repository Structure

```
├── Assignment1/
│   ├── assignment1.js   ← Coding questions + essay answers
│   ├── assignment1.pdf  ← Assignment 1 questions 
│   └── bonus.js         ← Bonus task
│
├── Assignment2/
│   ├── assignment2.js   ← Node.js built-in modules questions
│   ├── assignment2.pdf  ← Assignment 2 questions
│   └── bonus.js         ← LeetCode: Kth Missing Positive Number
│
└── README.md
```

---

## 📝 Assignment 1 – JavaScript Fundamentals

**File:** `Assignment1/assignment1.js`

### Part 1 – Coding Questions (15 Questions)

| # | Topic | Concept Used |
|---|-------|-------------|
| 1 | String to number conversion | `Number()` |
| 2 | Falsy check | `!value` |
| 3 | Skip even numbers | `for` loop + `continue` |
| 4 | Filter even numbers | `Array.filter()` |
| 5 | Merge arrays | Spread operator `[...a, ...b]` |
| 6 | Day of week | `switch` statement |
| 7 | String lengths | `Array.map()` |
| 8 | Divisibility check | Modulo `%` operator |
| 9 | Square of a number | Arrow function |
| 10 | Format object data | Object destructuring |
| 11 | Sum of arguments | Rest params `...nums` + `reduce` |
| 12 | Delayed promise | `new Promise` + `setTimeout` |
| 13 | Largest number | `Math.max()` + spread |
| 14 | Object keys | `Object.keys()` |
| 15 | Split string | `String.split()` |

### Part 2 – Essay Questions (5 Essays)

| # | Topic |
|---|-------|
| 1 | `forEach` vs `for...of` |
| 2 | Hoisting & the Temporal Dead Zone (TDZ) |
| 3 | `==` vs `===` |
| 4 | `try-catch` in async operations |
| 5 | Type Conversion vs Type Coercion |

### Bonus – `Assignment1/bonus.js`

**LeetCode Problem:** [Counter II](https://leetcode.com/problems/counter-ii)

---

## 📝 Assignment 2 – Node.js Built-in Modules

**File:** `Assignment2/assignment2.js`

### Questions (17 Questions)

| # | Description | Module | Method |
|---|-------------|--------|--------|
| 1 | Log current file path & directory | — | `__filename`, `__dirname` |
| 2 | Get file name from path | `path` | `path.basename()` |
| 3 | Build path from object | `path` | `path.format()` |
| 4 | Get file extension | `path` | `path.extname()` |
| 5 | Parse path → name & ext | `path` | `path.parse()` |
| 6 | Check if path is absolute | `path` | `path.isAbsolute()` |
| 7 | Join multiple path segments | `path` | `path.join()` |
| 8 | Resolve relative → absolute path | `path` | `path.resolve()` |
| 9 | Join two paths | `path` | `path.join()` |
| 10 | Delete a file asynchronously | `fs` | `fs.unlink()` |
| 11 | Create a folder synchronously | `fs` | `fs.mkdirSync()` |
| 12 | Event emitter – "start" event | `events` | `EventEmitter` `.on()` `.emit()` |
| 13 | Emit "login" event with username | `events` | `EventEmitter` `.on()` `.emit()` |
| 14 | Read a file synchronously | `fs` | `fs.readFileSync()` |
| 15 | Write to a file asynchronously | `fs` | `fs.writeFile()` |
| 16 | Check if a path exists | `fs` | `fs.existsSync()` |
| 17 | Get OS platform & CPU architecture | `os` | `os.platform()`, `os.arch()` |

### Bonus – `Assignment2/bonus.js`

**LeetCode Problem:** [Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/)

---

## 🚀 How to Run

Make sure you have [Node.js](https://nodejs.org/) installed, then:

```bash
# Run Assignment 1
node assignment1/assignment1.js

# Run Assignment 2
node assignment2/assignment2.js
```

---

## 🛠 Technologies

- **Runtime:** Node.js
- **Language:** JavaScript (ES6+)
- **Modules:** `path` · `fs` · `events` · `os`