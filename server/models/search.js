const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data.json");

const readDataFromFile = () => {
  const rawData = fs.readFileSync(dataFilePath);
  return JSON.parse(rawData);
};

const writeDataToFile = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

const searchDatabase = (searchTerm) => {
  const data = readDataFromFile();
  const results = data.searchResults.filter(
    (result) =>
      result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return results;
};

module.exports = { searchDatabase, writeDataToFile };
