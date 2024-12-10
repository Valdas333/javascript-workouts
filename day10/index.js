const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

async function queryDatabase() {
  const db = await open({
    filename: "./gift-165-ac8cf180-37c5-4dc7-8531-434ad1adfa1b.sqlite",
    driver: sqlite3.Database,
  });

  const result = await db.get(
    "SELECT SUM(retail_price) as total FROM customer_gift_purchases"
  );

  console.log(result);
}

queryDatabase();
