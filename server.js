// app.get("/", (req, res) =>
//   console.log(res.send(" checking  checkking sever 000"))
// );
// app.get("/", (req, res) => res.send(console.log("helow")));
// app.get("/", (req, res) => {
//   res.send("<h1> Helow car server 1</h1>");
// });

// app.get("/", (req, res) => {
//   // res.send(" nodemon server liserting 12 ");
//   let obj = {
//     massage: "hellow",
//     app: "jonsas",
//     naem: "monsur",
//   };
//   res.status(200).json(obj);
// });
// starting sever
// let obj = {
//   massage: "Umaiza",
//   app: "jonsas",
//   naem: "monsur",
// };

// let obj1 = {
//   massage: "Monsur",
//   app: "jonsas",
//   naem: "monsur",
// };

// app.get("/", (req, res) => {
//   // res.send(" nodemon server liserting 12 ");
//   res.status(200).json([obj, obj1]);
// });
// app.post("/", (req, res) => {
//   res.send(obj1);
// });

// app.get("/cars", (req, res) => {
//   res.status(200).json({
//     status: "scucess",
//     data: {
//       cars: cars,
//     },
//   });
// });
// const fs = fs.require(`${__dirname}/cars.json`);

///

/// app get
// app.get("/", (req, res) => {
//   res.send("allCars");
// });

//STORAGE
// const allCars = readFromJson("./cars.json");
// // read data from json file
// function readFromJson(address) {
//   try {
//     let rawData = fs.readFileSync(address, "utf-8");
//     const data = JSON.parse(rawData);
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }
// server

// app.get("/license/:licenceNum", async (req, res) => {
//   console.log(req.params);
//   const licence_No = req.params.licenceNum;
//   console.log(licence_No);
//   const allData = await getAllFromStorage(req.body);
//   const singleResult = allData.filter((item) => {
//     item.carLicence === licence_No;
//   });
//   console.log(singleResult);
//   res.json(singleResult);
//   // res.send({ status: 200, car: searchResult[0] });
// });
// find the license number
console.log("Monsur car sever is running.............");

// --------------
const { port, host } = require("./config.json");
const express = require("express");
const app = express();

// const cors = require("cors");
// const fs = require("fs");

const {
  getAllFromStorage,
  getFromStorage,
  addToStorage,
} = require("./store/storageLayer");

const { json, response } = require("express");

// use
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

// ***checking all the api fuucntions *****
// getAllFromStorage().then(console.log).catch(console.log);
// getFromStorage().then(console.log).catch(console.log);
// getFromStorage(20).then(console.log).catch(console.log);
// api builing from here

// getting alll cars form database
app.get("/cars", async (req, res) => {
  const data = await getAllFromStorage();
  // dublicate will check in client side
  console.log(req.body);
  res.json(data);
});

app.get("/license/:licenceNum", async (req, res) => {
  console.log(req);
  console.log(req.params);
  const carLicence = req.params.licenceNum;
  // let  = text.slice(12, 19
  const data = await getFromStorage(carLicence);
  console.log(data);
  res.json(data);
});

// creating single object data to teh databse
app.post("/cars", async (req, res) => {
  const status = await addToStorage(req.body);
  const message = status ? "addition OK" : "Not added";
  res.json({ message });
});

// getFromStorage(2).then(console.log).catch(console.log);

// getFromStorage(2).then(console.log).catch(console.log);

app.listen(port, host, () => console.log(`serving at ${host}:${port}`));
