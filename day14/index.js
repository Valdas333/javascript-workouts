const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

async function queryDatabase() {
  const db = await open({
    filename: "./exchange-165-44047cce-1514-4b06-8097-eb54a5d1609c copy.sqlite",
    driver: sqlite3.Database,
  });

  const result = await db.get(
    `SELECT COUNT(DISTINCT receiver_id) AS TotalRecords
FROM gift_exchanges ge 
LEFT JOIN user_wishlists uw 
ON ge.receiver_id = uw.user_id 
AND ge.gift_name = uw.gift_name 
WHERE uw.priority <= 3;
`
  );

  console.log(`Amount of lucky participants: ${result.TotalRecords}`);
}

queryDatabase();
