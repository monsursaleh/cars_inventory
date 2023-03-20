// // All input seletor
const carForm = document.getElementById("car-form");
// selecting the button for eventlister
const btnSubmit = document.querySelector("#btn-submit");
const btnReset = document.querySelector("#btn-reset");
// for displaying
const carTable = document.querySelector("#car-table");
const discount_Price = document.querySelector(".discoutedPrice");
// for Findling license plate number
const btnSearch = document.querySelector("#search_btn");
const searchResult = document.querySelector("#result_txt");
// Assigning varaible for storing the CarObj data
const cars = [];
//car object Construrctor

function CarObj(license, maker, model, owner, price, color) {
  this.carLicence = license;
  this.carMaker = maker;
  this.carModel = model;
  this.carOwner = owner;
  this.carPrice = price;
  this.carColor = color;
}

//  for checking  carobject by passing sample data
const newcar1 = new CarObj("123456", "Toyota", "Camry", "John", "10000", "red");
console.log(newcar1);

function newCarObj() {
  const license = document.querySelector("#license").value;

  const maker = document.querySelector("#maker").value;
  const model = document.querySelector("#model").value;
  const owner = document.querySelector("#owner").value;
  const price = document.querySelector("#price").value;
  const color = document.querySelector("#color").value;

  // its create a obejct
  const newcar = new CarObj(license, maker, model, owner, price, color);
  newcar.discount = discountPrice(price);
  console.log(newcar);
  return newcar;
  // console.log("car object", newcar);
}

// adding discountPrice

let discountPrice = function (price) {
  let discountPrice;
  if (price >= 20000) {
    discountPrice = price * 0.75;
  } else if (price <= 5000) {
    discountPrice = price * 0.9;
  } else {
    discountPrice = price * 0.85;
  }
  return discountPrice;
};

// sending new object  to the server

async function sendObj(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

// send new car object to server
function add_car() {
  const newCar = newCarObj();
  console.log(newCar);
  const url = "http://localhost:3007/cars";
  // res will be alart to the user.
  sendObj(url, newCar);
  window.location.reload();
}

// event lister for car database
btnSubmit.addEventListener("click", add_car);

// fucntion for display table and disocuted price
function display(carArr) {
  carArr.forEach(function (car) {
    const html = `
    <tr>
    <td>${car.carLicence}</td>
    <td>${car.carMaker}</td>
    <td>${car.carModel}</td>
    <td>${car.carOwner}</td>
    <td>${car.carPrice}</td>
    <td>${car.carColor}</td>
    </tr>`;

    carTable.insertAdjacentHTML("beforeend", html);
    discount_Price.textContent = car.discount;
  });
}

// Get cars table

async function getCars(url) {
  const response = await fetch(url, { mode: "cors" });
  const dataCars = await response.json();
  console.log(dataCars);
  display(dataCars);
}

getCars("http://localhost:3007/cars");

async function findCarByLicence() {
  let resultLicencse;
  const search_licence = document.querySelector("#search-license").value;

  let response = await fetch(`http://localhost:3007/license/${search_licence}`);
  let data = await response.json();
  console.log(data, typeof data);
  if (data != null) {
    resultLicencse = "Car found in database";
  } else {
    resultLicencse = "Car not found in database";
  }

  searchResult.textContent = resultLicencse;
}

btnSearch.addEventListener("click", findCarByLicence);

// reset

function reset() {
  carTable.innerHTML = "";
}

btnReset.addEventListener("click", reset);

// diffrent method of doing

// const data = fetch(`http://localhost:3007/license/${search_licence}`)
//   .then((response) => response.json())
//   .then((jsonData) => {
//     console.log(jsonData);
//     if (jsonData == !null) {
//       resultLicencse = "Car found in database ";
//     } else {
//       resultLicencse = "Car not found in database ";
//     }
//   });

// finding the car by license start from here
// function findCarByLicence() {
//   const search_licence = document.querySelector("#search-license").value;
//   for (const car of cars) {
//     console.log(car["carLicence"]);
//     if (car["carLicence"] === search_licence) {
//       const text = `Car Maker is : ${car.carMaker}, and car Model: ${car.carModel}, Owner: ${car.carOwner}`;
//       searchResult.textContent = text;
//       return;
//     } else {
//       searchResult.textContent = `Car not found now, try later!`;
//     }
//   }
// }
