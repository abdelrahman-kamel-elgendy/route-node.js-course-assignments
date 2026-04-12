# 📚 Route – Node.js Assignments

Solutions for the **Route** Node.js track assignments.  
Each assignment lives in its own folder and contains two files: the main solution and the bonus.

---

## 📁 Repository Structure

```
├── Assignment1/
│   ├── assignment1.js          ← Coding questions + essay answers
│   ├── assignment1.pdf         ← Assignment 1 questions
│   └── bonus.js                ← LeetCode: Counter II
│
├── Assignment2/
│   ├── assignment2.js          ← Node.js built-in modules questions
│   ├── assignment2.pdf         ← Assignment 2 questions
│   ├── bouns.js                ← LeetCode: Kth Missing Positive Number
│   ├── notes.txt               ← Sample file used in Q14 (readFileSync)
│   └── to_be_deleted.txt       ← Sample file used in Q10 (unlink)
│
├── Assignment3/
│   ├── assignment3.js          ← Streams + HTTP CRUD + Node Internals essays
│   ├── assignment3.pdf         ← Assignment 3 questions
│   ├── Assignment3-part2.postman_collection.json  ← Postman collection for API testing
│   ├── bouns.js                ← LeetCode: Majority Element
│   ├── big.txt                 ← Sample file used in streams questions
│   ├── dest.txt                ← Output file from stream copy (Q2)
│   ├── data.txt.gz             ← Compressed output from pipeline (Q3)
│   └── users.json              ← JSON file database for HTTP CRUD API
│
├── Assignment4/
│   ├── assignment4.js          ← Express.js CRUD API
│   ├── assignment4.pdf         ← Assignment 4 questions
│   ├── Assignment4.postman_collection.json  ← Postman collection for API testing
│   ├── bouns.js                ← LeetCode: Longest Common Prefix
│   └── users.json              ← JSON file database for Express CRUD API
│
├── Assignment5/
│   ├── assignment5.pdf         ← Assignment 5 questions
│   ├── musicana-erd.png        ← Part 1: Musicana Records ERD diagram
│   └── user-product-schema.png ← Part 2: User–Product schema mapping
│
├── Assignment6/
│   ├── assignment6.js          ← Node.js + MySQL retail store queries
│   ├── musicana-erd.png        ← Part 1: Musicana Records ERD diagram
│   ├── user-product-schema.png ← Part 2: User–Product schema mapping
│   ├── assignment6.pdf         ← Assignment 6 questions
│   └── bouns.js                ← LeetCode: Customer Who Visited but Did Not Make Any Transactions
│
├── .gitignore
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

### Bonus – `Assignment2/bouns.js`

**LeetCode Problem:** [Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/)

---

## 📝 Assignment 3 – Streams, HTTP & Node Internals

**File:** `Assignment3/assignment3.js`

### Part 1 – Core Modules: Streams

| # | Description | Module | Method |
|---|-------------|--------|--------|
| 1 | Read `big.txt` in chunks and log each | `fs` | `createReadStream()` |
| 2 | Copy file → output saved to `dest.txt` | `fs` | `createReadStream()` + `createWriteStream()` + `.pipe()` |
| 3 | Read → compress → write `data.txt.gz` | `fs`, `zlib`, `stream` | `createGzip()` + `pipeline()` |

### Part 2 – HTTP CRUD API

**Database:** `Assignment3/users.json` (data persisted to file — no in-memory arrays)  
**Postman Collection:** `Assignment3/Assignment3-part2.postman_collection.json`

| # | Method | URL | Description |
|---|--------|-----|-------------|
| 1 | `POST` | `/user` | Add a new user (checks for duplicate email) |
| 2 | `PATCH` | `/user/:id` | Update user name, age, or email by ID |
| 3 | `DELETE` | `/user/:id` | Delete a user by ID |
| 4 | `GET` | `/user` | Get all users |
| 5 | `GET` | `/user/:id` | Get a single user by ID |

### Part 3 – Node Internals (Essays)

| # | Topic |
|---|-------|
| 1 | What is the Node.js Event Loop? |
| 2 | What is Libuv and its role in Node.js? |
| 3 | How Node.js handles async operations under the hood |
| 4 | Difference between Call Stack, Event Queue, and Event Loop |
| 5 | Node.js Thread Pool and how to set its size (`UV_THREADPOOL_SIZE`) |
| 6 | How Node.js handles blocking vs non-blocking code |

### Bonus – `Assignment3/bouns.js`

**LeetCode Problem:** [Majority Element](https://leetcode.com/problems/majority-element/)

---

## 📝 Assignment 4 – Express.js CRUD & ERD Design

**File:** `Assignment4/assignment4.js`  
**Database:** `Assignment4/users.json` (data persisted to file — no in-memory arrays)  
**Postman Collection:** `Assignment4/Assignment4.postman_collection.json`

### Part 1 – Express.js CRUD API (7 Endpoints)

| # | Method | URL | Description |
|---|--------|-----|-------------|
| 1 | `POST` | `/user` | Add a new user (checks for duplicate email) |
| 2 | `PATCH` | `/user/:id` | Update user name, age, or email by ID |
| 3 | `DELETE` | `/user/:id` | Delete a user by ID (also accepts ID from body) |
| 4 | `GET` | `/user/getByName?name=ali` | Get a user by name (query parameter) |
| 5 | `GET` | `/user` | Get all users |
| 6 | `GET` | `/user/filter?minAge=25` | Filter users by minimum age |
| 7 | `GET` | `/user/:id` | Get a user by ID |

### Part 2 – ERD Diagram (Musicana Records)

| Entity | Attributes |
|--------|-----------|
| `MUSICIAN` | `musician_id` (PK), `name`, `street`, `city`, `phone` |
| `INSTRUMENT` | `instrument_id` (PK), `name`, `musical_key` |
| `ALBUM` | `album_id` (PK), `title`, `copyright_date`, `producer_id` (FK) |
| `SONG` | `song_id` (PK), `title`, `author`, `album_id` (FK) |
| `PLAYS` | `musician_id` (FK), `instrument_id` (FK) |
| `PERFORMS` | `musician_id` (FK), `song_id` (FK) |

### Bonus – `Assignment4/bouns.js`

**LeetCode Problem:** [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)

---

## 📝 Assignment 5 – ERD & Schema Mapping

### Part 1 – Musicana Records ERD

| Entity | Attributes |
|--------|-----------|
| `MUSICIAN` | `musician_id` (PK), `name`, `street`, `city`, `phone` |
| `INSTRUMENT` | `instrument_id` (PK), `name`, `musical_key` |
| `ALBUM` | `album_id` (PK), `title`, `copyright_date`, `producer_id` (FK → MUSICIAN) |
| `SONG` | `song_id` (PK), `title`, `author`, `album_id` (FK → ALBUM) |
| `PLAYS` | `musician_id` (FK), `instrument_id` (FK) — M:N junction table |
| `PERFORMS` | `musician_id` (FK), `song_id` (FK) — M:N junction table |

### Part 2 – Schema Mapping (User → Own → Product)

```sql
USER (
  id        INT          PRIMARY KEY,
  firstName VARCHAR(50)  NOT NULL,
  lastName  VARCHAR(50)  NOT NULL,
  userName  VARCHAR(50)  NOT NULL UNIQUE,
  email     VARCHAR(100) NOT NULL UNIQUE,
  phone     VARCHAR(20),
  role      VARCHAR(20)  NOT NULL,
  password  VARCHAR(255) NOT NULL
);

PRODUCT (
  id        INT            PRIMARY KEY,
  name      VARCHAR(100)   NOT NULL,
  stock     INT            NOT NULL DEFAULT 0,
  price     DECIMAL(10, 2) NOT NULL,
  isDeleted BOOLEAN        NOT NULL DEFAULT FALSE,
  user_id   INT            NOT NULL,
  FOREIGN KEY (user_id) REFERENCES USER(id)
);
```

---

## 📝 Assignment 6 – Node.js + MySQL

**File:** `Assignment6/assignment6.js`  
**Setup:** `npm install mysql2` inside the Assignment6 folder

### Part 1 – Musicana Records ERD
Same ERD as Assignment 5 Part 1.

### Part 2 – Schema Mapping
Same schema mapping as Assignment 5 Part 2.

### Part 3 – MySQL Queries (16 Tasks)

#### Database Schema

| Table | Columns |
|-------|---------|
| `Suppliers` | `SupplierID` (PK, AI), `SupplierName` (TEXT), `ContactNumber` (TEXT → VARCHAR(15)) |
| `Products` | `ProductID` (PK, AI), `ProductName` (TEXT NOT NULL), `Price` (DECIMAL), `StockQuantity` (INT), `SupplierID` (FK) |
| `Sales` | `SaleID` (PK, AI), `ProductID` (FK), `QuantitySold` (INT), `SaleDate` (DATE) |

#### Query Tasks

| # | Type | Task |
|---|------|------|
| 1 | DDL | Create `Suppliers`, `Products`, `Sales` tables with FK constraints |
| 2 | DDL | `ALTER TABLE Products ADD COLUMN Category TEXT` |
| 3 | DDL | `ALTER TABLE Products DROP COLUMN Category` |
| 4 | DDL | `ALTER TABLE Suppliers MODIFY COLUMN ContactNumber VARCHAR(15)` |
| 5 | DDL | `ALTER TABLE Products MODIFY COLUMN ProductName TEXT NOT NULL` |
| 6 | DML | Insert supplier `FreshFoods`, insert `Milk`, `Bread`, `Eggs`, insert sale of 2 × Milk |
| 7 | DML | `UPDATE Products SET Price = 25.00 WHERE ProductName = 'Bread'` |
| 8 | DML | `DELETE FROM Products WHERE ProductName = 'Eggs'` |
| 9 | DQL | Total quantity sold per product (`SUM` + `GROUP BY` + `JOIN`) |
| 10 | DQL | Product with highest stock (`ORDER BY DESC LIMIT 1`) |
| 11 | DQL | Suppliers starting with `'F'` (`LIKE 'F%'`) |
| 12 | DQL | Products never sold (`LEFT JOIN … WHERE SaleID IS NULL`) |
| 13 | DQL | All sales with product name and date (`JOIN`) |
| 14 | DCL | Create user `store_manager` with `SELECT`, `INSERT`, `UPDATE` on all tables |
| 15 | DCL | `REVOKE UPDATE` from `store_manager` |
| 16 | DCL | `GRANT DELETE` on `Sales` only to `store_manager` |

### Bonus – `Assignment6/bouns.txt`

**LeetCode Problem:** [Customer Who Visited but Did Not Make Any Transactions](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/)

---

## 🚀 How to Run

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
# Run Assignment 1
node Assignment1/assignment1.js

# Run Assignment 2
node Assignment2/assignment2.js

# Run Assignment 3 – HTTP Server
node Assignment3/assignment3.js

# Run Assignment 4 – Express Server
cd Assignment4 && npm install express && node assignment4.js

# Run Assignment 6 – MySQL queries
cd Assignment6
npm install mysql2
# Update the db password in assignment6.js first, then:
node assignment6.js
```

**Test the Assignment 4 API with curl:**

```bash
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d '{"name":"Ahmed","age":27,"email":"ahmed@email.com"}'

curl http://localhost:3000/user
curl "http://localhost:3000/user/getByName?name=Ahmed"
curl "http://localhost:3000/user/filter?minAge=25"
curl http://localhost:3000/user/1
curl -X PATCH http://localhost:3000/user/1 \
  -H "Content-Type: application/json" \
  -d '{"age":30}'
curl -X DELETE http://localhost:3000/user/1
```

---

## 🛠 Technologies

- **Runtime:** Node.js
- **Language:** JavaScript (ES6+)
- **Framework:** Express.js (Assignment 4)
- **Database:** MySQL + `mysql2` package (Assignment 6)
- **Database design:** ERD + Relational Schema (Assignments 5 & 6)
- **Modules:** `path` · `fs` · `events` · `os` · `http` · `stream` · `zlib`