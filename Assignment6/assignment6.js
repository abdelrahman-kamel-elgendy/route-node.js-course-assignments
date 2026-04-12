// ============================================================
// Assignment 6 – Part 3: Node.js + MySQL Retail Store
// ============================================================

const mysql = require("mysql2/promise");

const dbConfig = {
  host: "localhost",
  user: "root",
  database: "retail_store",
};

async function run() {
  const db = await mysql.createConnection(dbConfig);
  console.log("Connected to MySQL.\n");

  // =============================================================
  // 1. Create the required tables
  // =============================================================
  await db.execute(`
    CREATE TABLE IF NOT EXISTS Suppliers (
      SupplierID     INT          PRIMARY KEY AUTO_INCREMENT,
      SupplierName   TEXT         NOT NULL,
      ContactNumber  TEXT
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Products (
      ProductID      INT            PRIMARY KEY AUTO_INCREMENT,
      ProductName    TEXT           NOT NULL,
      Price          DECIMAL(10,2)  NOT NULL,
      StockQuantity  INT            NOT NULL,
      SupplierID     INT,           FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
    )
  `);

  await db.execute(`
      CREATE TABLE IF NOT EXISTS Sales (
        SaleID         INT            PRIMARY KEY AUTO_INCREMENT,
        QuantitySold   INT            NOT NULL,
        SaleDate       DATE           NOT NULL, 
        ProductID      INT,           FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
      )
    `);

  console.log("1. Tables created.");


  // =============================================================
  // 2. Add "Category" column to Products
  // =============================================================
  await db.execute(`
      ALTER TABLE Products ADD COLUMN Category TEXT
    `);

  console.log("2. Column 'Category' added to Products.");


  // =============================================================
  // 3. Remove "Category" column from Products
  // =============================================================
  await db.execute(`
      ALTER TABLE Products DROP COLUMN Category
    `);

  console.log("3. Column 'Category' removed from Products.");


    // =============================================================
    // 4. Change ContactNumber in Suppliers to VARCHAR(15)
    // =============================================================
    await db.execute(`
      ALTER TABLE Suppliers MODIFY COLUMN ContactNumber VARCHAR(15)
    `);
    console.log("4. 'ContactNumber' changed to VARCHAR(15).");


    // =============================================================
    // 5. Add NOT NULL constraint to ProductName
    // =============================================================
    await db.execute(`
      ALTER TABLE Products MODIFY COLUMN ProductName TEXT NOT NULL
    `);
    console.log("5. NOT NULL constraint added to 'ProductName'.");


    // =============================================================
    // 6. Basic Inserts
    // =============================================================

    // 6a. Add supplier FreshFoods
    const [supplierResult] = await db.execute(`
      INSERT INTO Suppliers (SupplierName, ContactNumber)
      VALUES ('FreshFoods', '01001234567')
    `);
    const supplierID = supplierResult.insertId;

    // 6b. Insert three products from FreshFoods
    await db.execute(`
      INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID) VALUES
        ('Milk',  15.00, 50, ?),
        ('Bread', 10.00, 30, ?),
        ('Eggs',  20.00, 40, ?)
    `, [supplierID, supplierID, supplierID]);

    // 6c. Add sale of 2 units of Milk on 2025-05-20
    const [[milk]] = await db.execute(
      `SELECT ProductID FROM Products WHERE ProductName = 'Milk'`
    );
    await db.execute(`
      INSERT INTO Sales (ProductID, QuantitySold, SaleDate)
      VALUES (?, 2, '2025-05-20')
    `, [milk.ProductID]);

    console.log("6. Inserts completed (supplier, products, sale).");


    // =============================================================
    // 7. Update the price of Bread to 25.00
    // =============================================================
    await db.execute(`
      UPDATE Products SET Price = 25.00 WHERE ProductName = 'Bread'
    `);
    console.log("7. Price of 'Bread' updated to 25.00.");


    // =============================================================
    // 8. Delete the product Eggs
    // =============================================================
    await db.execute(`
      DELETE FROM Products WHERE ProductName = 'Eggs'
    `);
    console.log("8. Product 'Eggs' deleted.");


    // =============================================================
    // 9. Total quantity sold for each product
    // =============================================================
    const [totalSold] = await db.execute(`
      SELECT p.ProductName, SUM(s.QuantitySold) AS TotalSold
      FROM Products p
      JOIN Sales s ON p.ProductID = s.ProductID
      GROUP BY p.ProductID, p.ProductName
    `);
    console.log("\n9. Total quantity sold per product:");
    console.table(totalSold);


    // =============================================================
    // 10. Product with the highest stock
    // =============================================================
    const [highestStock] = await db.execute(`
      SELECT ProductName, StockQuantity
      FROM Products
      ORDER BY StockQuantity DESC
      LIMIT 1
    `);
    console.log("10. Product with highest stock:");
    console.table(highestStock);


    // =============================================================
    // 11. Suppliers with names starting with 'F'
    // =============================================================
    const [suppliersF] = await db.execute(`
      SELECT * FROM Suppliers
      WHERE SupplierName LIKE 'F%'
    `);
    console.log("11. Suppliers starting with 'F':");
    console.table(suppliersF);


    // =============================================================
    // 12. Products that have never been sold
    // =============================================================
    const [neverSold] = await db.execute(`
      SELECT p.ProductName
      FROM Products p
      LEFT JOIN Sales s ON p.ProductID = s.ProductID
      WHERE s.SaleID IS NULL
    `);
    console.log("12. Products never sold:");
    console.table(neverSold);


    // =============================================================
    // 13. All sales with product name and sale date
    // =============================================================
    const [salesDetail] = await db.execute(`
      SELECT s.SaleID, p.ProductName, s.QuantitySold, s.SaleDate
      FROM Sales s
      JOIN Products p ON s.ProductID = p.ProductID
    `);
    console.log("13. All sales with product name and sale date:");
    console.table(salesDetail);


    // =============================================================
    // 14. Create user store_manager with SELECT, INSERT, UPDATE
    // =============================================================
    await db.execute(`
      CREATE USER IF NOT EXISTS 'store_manager'@'localhost' IDENTIFIED BY 'manager_pass'
    `);
    await db.execute(`
      GRANT SELECT, INSERT, UPDATE ON retail_store.* TO 'store_manager'@'localhost'
    `);
    await db.execute(`FLUSH PRIVILEGES`);
    console.log("14. User 'store_manager' created with SELECT, INSERT, UPDATE.");


    // =============================================================
    // 15. Revoke UPDATE from store_manager
    // =============================================================
    await db.execute(`
      REVOKE UPDATE ON retail_store.* FROM 'store_manager'@'localhost'
    `);
    await db.execute(`FLUSH PRIVILEGES`);
    console.log("15. UPDATE permission revoked from 'store_manager'.");


    // =============================================================
    // 16. Grant DELETE on Sales only to store_manager
    // =============================================================
    await db.execute(`
      GRANT DELETE ON retail_store.Sales TO 'store_manager'@'localhost'
    `);
    await db.execute(`FLUSH PRIVILEGES`);
    console.log("16. DELETE on Sales granted to 'store_manager'.");


    await db.end();
    console.log("\nAll queries executed successfully.");
}

run().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});