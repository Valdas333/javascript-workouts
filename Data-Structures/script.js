"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      time,
      address
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Vilnius",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Vilnius",
  starterIndex: 1,
});

// destrocturing arrays
// const arr = [2, 3, 4];
// let [x, y] = arr;
// console.log(x, y);

// variable switch
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = "nothing"] = [8, 9];
// console.log(p, q, r);

// destucturing objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutate variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
// console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Spread

const newMenu = [...restaurant.mainMenu, "Lazania"];
// console.log(newMenu);

// Copy
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arr
const fullMenu = [...mainMenuCopy, ...restaurant.starterMenu];
// console.log(fullMenu);

const ingredients = ["a", "b", "c"];
restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = { ...restaurant, founder: "Mario" };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };

// REST, spread operator on right side of =
// sudeda spread i masyva
const [first, second, ...others] = [1, 2, 3, 4, 5];

// console.log(first, second, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// REST arguments
const add = function (...numbers) {
  let total = 0;
  console.log(numbers.reduce((total = 0, number) => total + number, total));
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 7, 2, 23, 45);

const x = [22, 11, 33];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives");
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// no value, but still array is created
restaurant.orderPizza("mushrooms");
