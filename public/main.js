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
  this.carLicense = license;
  this.carMaker = maker;
  this.carModel = model;
  this.carOwner = owner;
  this.carPrice = price;
  this.carColor = color;
}

//  for checking  carobject by passing sample data
const newcar1 = new CarObj("123456", "Toyota", "Camry", "John", "10000", "red");
console.log(newcar1);

function add_car() {
  // All License data input seletor
  const license = document.querySelector("#license").value;
  const maker = document.querySelector("#maker").value;
  const model = document.querySelector("#model").value;
  const owner = document.querySelector("#owner").value;
  const price = document.querySelector("#price").value;
  const color = document.querySelector("#color").value;
  // its create a obejct
  const newcar = new CarObj(license, maker, model, owner, price, color);
  newcar.discount = discountPrice(price);
  //pushing CarObj into cars arry
  cars.push(newcar);
  // calling the display fucntion
  display(cars);
}

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

// event lister for car database
btnSubmit.addEventListener("click", add_car);
function reset() {
  carTable.innerHTML = "";
}
btnReset.addEventListener("click", reset);

// finding the car by license start from here
function findCarByLicence() {
  const search_licence = document.querySelector("#search-license").value;
  for (const car of cars) {
    console.log(car["carLicense"]);
    if (car["carLicense"] === search_licence) {
      const text = `Car Maker is : ${car.carMaker}, and car Model: ${car.carModel}, Owner: ${car.carOwner}`;
      searchResult.textContent = text;
      return;
    } else {
      searchResult.textContent = `Car not found now, try later!`;
    }
  }
}

btnSearch.addEventListener("click", findCarByLicence);

async function getAllCars(url) {
  const response = await fetch(url, { mode: "cors" });
  const dataCars = await response.json();
  console.log(dataCars);
  display(dataCars);
}

getAllCars("http://localhost:3007/cars");

// Create a method discount() for the car object that returns a discounted price. The discounted price depends on the price of the car. If the price is over 20 000, the discount is 25%. If it is under 5000, it is 10%. Otherwise, the discount is 15%.
// Display the discount % and the discount amount in the search

//finding the car search can be done with filter

// display table can be done this also for future note

// let displayTable = function (carArr) {
//   let table = carArr.forEach(function (car) {
//     carTable.innerHTML += `
//             <tr>
//                 <td>${car.carLicense}</td>
//                 <td>${car.carMaker}</td>
//                 <td>${car.carModel}</td>
//                 <td>${car.carOwner}</td>
//                 <td>${car.carPrice}</td>
//                 <td>${car.carColor}</td>
//             </tr>
//             `;
//   });
//   return table;
// };

///finding car lincese plate

// const findLicense = (event) => {
//   event.preventDefault();

//   carObjdata.forEach((car) => {
//     let searchOut;
//     if (car.license == inputLicense) {
//       searchOut = car;
//     }
//   });
//   if (searchOut != undefined) {
//     licenceOutput.textContent = `Car license ${searchOut.plate} is owned by ${searchOut.owner}`;
//   } else if (filter === "") {
//     searchOut.textContent = "Please enter license number";
//   } else {
//     searchOut.textContent = "No car was found";
//   }
// };

// searchForm.addEventListener("submit", findLicense);
