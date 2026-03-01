# Route Node.js Course Assignments

This repository contains assignments from the Route Node.js course, demonstrating fundamental JavaScript concepts and problem-solving skills.

## Repository Structure

```
route-node.js-course-assignments/
└── Assignment1/
    ├── Assignment1.js     - Main coding questions and exercises
    └── bonus.js           - Bonus challenge problems
```

## Assignment 1

### Assignment1.js
A comprehensive set of coding questions covering core JavaScript concepts:

**Topics Covered:**
- **Type Conversion** - Converting strings to numbers and performing arithmetic
- **Truthy/Falsy Values** - Understanding JavaScript's boolean coercion
- **Loop Control** - Using `for` loops with `continue` statements
- **Array Methods** - Using `filter()` and other array manipulation techniques
- **Spread Operator** - Merging arrays and objects with the spread syntax
- **Switch Statements** - Conditional logic for multiple cases
- **Higher-Order Functions** - Functions that work with other functions
- **Object/Array Destructuring** - Extracting values from data structures
- **String Methods** - Working with string manipulation and transformation

Each question includes:
- Clear problem statements
- Input data examples
- Expected outputs
- Formatted console output for verification

### bonus.js
**Counter Function Challenge**

A functional programming exercise that implements a closure-based counter with the following methods:
- `increment()` - Increments the counter value
- `decrement()` - Decrements the counter value
- `reset()` - Resets the counter to its initial value

This demonstrates:
- Closures in JavaScript
- Factory functions
- Returning objects with methods
- State management without classes

## Running the Code

### Prerequisites
- Node.js installed on your system

### Execution
To run Assignment 1:
```bash
node Assignment1/Assignment1.js
```

To run the bonus challenge:
```bash
node Assignment1/bonus.js
```

Or to test the counter function interactively:
```bash
node
> const counter = require('./Assignment1/bonus.js');
> const myCounter = createCounter(5);
> myCounter.increment();  // 6
> myCounter.decrement();  // 5
> myCounter.reset();      // 5
```

## Learning Objectives

By completing these assignments, you will understand:
- JavaScript fundamentals and syntax
- Working with different data types and methods
- Functional programming concepts
- Problem-solving approaches
- Code organization and readability

## Notes

- All solutions follow JavaScript best practices
- Code is well-commented for learning purposes
- Each question can be run independently