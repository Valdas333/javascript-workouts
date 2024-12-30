const rest = new Map();
rest.set("name", "Ciliakas");
rest.set(1, "Laisves pr.");
console.log(rest.set(2, "Vilnius,Lietuva"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest);

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.size);

rest.set([1, 2], "Test");
console.log(rest.get([1, 2]));

const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));

// document.querySelector("h1").addEventListener("click", function () {
//   rest.delete(2);
//   console.log(rest);
// });
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct :D"],
  [false, "Try again! :("],
]);

console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
console.log(question.get(question.get("correct"))) === answer;

console.log([...question]);
