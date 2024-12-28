const restaurant = require("./restaurant.js");
console.log("---OR---");

// short circuiting
console.log(3 || "Valdas");
console.log("" || "V");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "hello" || 23 || null);

// restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
const guests2 = 0;
console.log(guests2);
console.log("---AND---");
console.log(0 && "Valdas");
console.log(7 && "Valdas");
console.log(0 && null);
console.log("hello" && 23 && null && "V");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushroms", "spinach");

console.log("---??---");
// nulish values are null and undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = { name: "La Piazza", owner: "Giovanni Rossi" };

// rest1.numGuests = rest1.numGuests || 10;
rest1.numGuests ??= 10;
// rest2.numGuests = rest2.numGuests || 10;
rest2.numGuests ??= 10;

//
// rest1.owner = rest1.owner && "<Classified>";
// &&= not adds undefinied if no value is present(shortcircuits to false)
rest1.owner &&= "<Classified>";
// rest2.owner = rest2.owner && "<Classified>";
rest2.owner &&= "<Classified>";
console.log(rest1);
console.log(rest2);
