// Inputy, w które podajemy dane
const daysInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

// Dane wyswietlane na srodku
const firstYear = document.querySelector(".first");
const secondMonth = document.querySelector(".second");
const thirdDay = document.querySelector(".third");

const btn = document.querySelector(".btn");

let currentYear = 2023;
let monthValue = 12;
let daysValue = 31;

// Funkcja, która sprawdzi czy podane dane się zgadzają
// Jesli sie zgadzaja -> oblicza aktualny wiek
// Jesli sie nie zgadzaja -> bordery koloruje na czerwono.
const checkDate = () => {
  if (daysInput.value > daysValue || daysInput.value == 0) {
    daysInput.style.borderColor = "red";
  } else if (daysInput.value <= daysValue) {
    daysInput.style.borderColor = "green";
  }

  if (monthInput.value > monthValue || monthInput.value == 0) {
    monthInput.style.borderColor = "red";
  } else if (monthInput.value <= monthValue) {
    monthInput.style.borderColor = "green";
  }
  if (
    yearInput.value > currentYear ||
    yearInput.value == 0 ||
    yearInput.value < 1900
  ) {
    yearInput.style.borderColor = "red";
  } else if (yearInput.value <= currentYear && yearInput.value >= 1900) {
    yearInput.style.borderColor = "green";
  }

  const calcYear = currentYear - yearInput.value;
  firstYear.textContent = calcYear;

  const calcMonth = monthValue - monthInput.value;
  secondMonth.textContent = calcMonth;

  const calcDay = daysValue - daysInput.value;
  thirdDay.textContent = calcDay;
};

btn.addEventListener("click", checkDate);
