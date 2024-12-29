const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Food"));

// Set doesnt have indexes
console.log(ordersSet[0]);

const staff = ["Waiter", "Chef", "Waiter", "Manager"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// const commonFoodS = italianFoods.intersection(mexicanFoods);
const italianMexicanFusion = new Set([...italianFoods], ...mexicanFoods);
console.log(italianMexicanFusion);
