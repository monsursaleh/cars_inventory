"use strict";

const fs = require("fs");

async function readStorage(storageFilePath) {
  try {
    const data = await fs.promises.readFile(storageFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    // console.log(err);
    return [];
  }
}

//returns true on success and false if failed
async function writeStorage(storageFilePath, data) {
  try {
    await fs.promises.writeFile(
      storageFilePath,
      JSON.stringify(data, null, 4),
      {
        encoding: "utf8",
        flag: "w",
      }
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

module.exports = { readStorage, writeStorage };

// readStorage("./cars.json").then(console.log).catch(console.log);
// writeStorage("./testCar.json", [{ a: 2, b: 3 }])
//   .then(console.log)
//   .catch(console.log);
