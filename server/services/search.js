const { searchDatabase } = require("../models/search");

const searchService = async (searchTerm) => {
  const results = await searchDatabase(searchTerm);
  return results;
};

module.exports = { searchService };
