const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

async function queryDatabase() {
  const db = await open({
    filename: "./gift-165-ac8cf180-37c5-4dc7-8531-434ad1adfa1b.sqlite",
    driver: sqlite3.Database,
  });

  // result is null because in gifts table is no gift with category id 6(leisure)
  const categoryID = await db.get(
    "SELECT name FROM gift_categories WHERE gift_categories.name = 'leisure'"
  );

  const leisureId = await db.get(
    `SELECT * FROM gift_categories 
    LEFT JOIN gifts
      ON gift_categories.gift_category_id = gifts.gift_category_id 
    WHERE gift_categories.name = 'leisure'`
  );

  const result = await db.get(
    `SELECT SUM(retail_price) as total 
    FROM customer_gift_purchases
    LEFT JOIN gifts 
      ON customer_gift_purchases.gift_id = gifts.gift_id
    LEFT JOIN gift_categories 
      ON gifts.gift_category_id = gift_categories.gift_category_id 
    WHERE customer_gift_purchases.customer_id = 2 
      AND gift_categories.name = 'leisure'`
  );

  console.log(categoryID);
  console.log(leisureId);
  console.log(result);
}

queryDatabase();
