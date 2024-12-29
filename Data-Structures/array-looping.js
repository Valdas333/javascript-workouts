const restaurant = require("./restaurant.js");

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.order?.(0, 1) ?? "Method does not exists");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exists");

const users = [
  {
    name: "Valdas",
    email: "ddd",
  },
];

console.log(users[1]?.name ?? "User array empty or value does not exists");

const properties = Object.keys(restaurant);
console.log(properties);

for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

for (const values of Object.values(restaurant.openingHours)) {
  console.log(values);
}

for (const entries of Object.entries(restaurant.openingHours)) {
  console.log(entries);
}

for (const [day, { open, close }] of Object.entries(restaurant.openingHours)) {
  console.log(`On ${day} we open at ${open} and close at close ${close}`);
}
