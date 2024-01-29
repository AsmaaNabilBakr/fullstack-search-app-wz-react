const { searchService } = require('../services/search');

const searchController = async (req, res, next) => {
  try {
    const searchTerm = req.query.q;
    const results = await searchService(searchTerm);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

module.exports = { searchController };
