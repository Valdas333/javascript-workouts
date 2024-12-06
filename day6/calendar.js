console.log("hello");
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const daysInMonth = getDaysInMonth(year, month);
const firstDayOfMonth = getFirstDayOfMonth(year, month);
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
  return new Date(year, month, 1).getDay();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("current-date").textContent = `${day}, ${
    dayOfWeek[date.getDay()]
  }`;
  document.getElementById(
    "current-month"
  ).textContent = `${monthNames[month]}, ${year}`;
  //   for (let i = 1; i <= daysInMonth; i++) {
  //     const dayElement = document.createElement("div");
  //     dayElement.classList.add("calendar__day");
  //     dayElement.textContent = `${i}`;
  //     document.querySelector(".calendar__days").appendChild(dayElement);
  //   }
});
