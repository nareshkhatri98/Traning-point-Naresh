const month = document.getElementById("month");
const weekday = document.getElementById("weekday");
const day = document.getElementById("day");
const year = document.getElementById("year");
const time = document.getElementById("time");

window.addEventListener("DOMContentLoaded", () => {
  const date = new Date();

  const months = [
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

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  console.log("month:", date.getMonth());
  console.log("day:", date.getDate());
  console.log("year:", date.getFullYear());

  month.textContent = months[date.getMonth()];
  weekday.textContent = weekdays[date.getDay()];
  year.textContent = date.getFullYear();
});
