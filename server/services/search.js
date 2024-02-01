const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data.json");
const searchController = async (req, res, next) => {
  try {
    const searchTerm = req.query.q;
    const results = await searchDatabase(searchTerm);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

// Search endpoint
router.get("/", searchController);

const readDataFromFile = () => {
  const rawData = fs.readFileSync(dataFilePath);
  return JSON.parse(rawData);
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

module.exports = router;
