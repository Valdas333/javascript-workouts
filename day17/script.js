const deeds = require("./deed.js");

const deedArray = deeds
  .split("\n")
  .map((deed) => deed.split(": "))
  .sort((a, b) => Number(a[1]) - Number(b[1]));

console.log(deedArray[deedArray.length - 1]);
console.log(deedArray[deedArray.length - 2]);
console.log(deedArray[deedArray.length - 3]);
