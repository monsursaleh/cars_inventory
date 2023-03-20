console.log("Monsur car sever is running...");

const { port, host } = require("./config.json");
const express = require("express");
const app = express();

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
app.listen(port, host, () => console.log(`serving at ${host}:${port}`));
