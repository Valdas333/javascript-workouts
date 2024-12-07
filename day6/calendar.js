const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const daysInMonth = getDaysInMonth(year, month);
let firstDayOfMonth = getFirstDayOfMonth(year, month);
const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month).getDay();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("current-date").textContent = `${day}, ${
    dayOfWeek[date.getDay()]
  }`;
  document.getElementById(
    "current-month"
  ).textContent = `${monthNames[month]}, ${year}`;

  document.querySelectorAll(".calendar__date").forEach((targetElement) => {
    // week starts not from sunday here
    if (firstDayOfMonth === 0) {
      firstDayOfMonth = 7;
    }
    console.log(firstDayOfMonth);
    for (let i = 1; i < firstDayOfMonth; i++) {
      const placeholderDay = document.createElement("div");
      placeholderDay.classList.add("calendar__number");
      placeholderDay.textContent = "";
      targetElement.appendChild(placeholderDay);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayElement = document.createElement("div");
      if (i === day) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("calendar__number--current");
        dayElement.textContent = `${i}`;
        targetElement.appendChild(dayElement);
        continue;
      }
      dayElement.classList.add("calendar__number");
      dayElement.textContent = `${i}`;
      targetElement.appendChild(dayElement);
    }
  });
});

const date2 = new Date();

const year2 = date2.getFullYear();
const month2 = date2.toLocaleDateString("default", { month: "long" });
const weekday2 = date2.toLocaleDateString("default", { weekday: "long" });
const day2 = date2.getDay() + 1;

console.log(` my current date : ${firstDayOfMonth}`);
