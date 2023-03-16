"use strict";

const path = require("path");

const storageFilePath = path.join(__dirname, "cars.json");
console.log(__dirname, " i m from strorage layer ");

const { readStorage, writeStorage } = require("./readerWriter");

async function getAllFromStorage() {
  return readStorage(storageFilePath);
}

// readStorage("./cars.json").then(console.log).catch(console.log);

// getAllFromStorage().then(console.log).catch(console.log);

async function addToStorage(newObject) {
  const storage = await readStorage(storageFilePath);
  storage.push(newObject);
  return await writeStorage(storageFilePath, storage);
}

async function getFromStorage(carLicence) {
  return (
    (await readStorage(storageFilePath)).find(
      (item) => item.carLicence == carLicence
    ) || null
  );
}
module.exports = {
  getAllFromStorage,
  getFromStorage,
  addToStorage,
};
