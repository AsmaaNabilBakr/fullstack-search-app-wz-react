const express = require('express');
const router = express.Router();
const { searchController } = require('../controllers/search');

// Search endpoint
router.get('/', searchController);

module.exports = router;
