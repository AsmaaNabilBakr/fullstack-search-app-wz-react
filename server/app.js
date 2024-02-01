const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const searchRouter = require("./services/search");

const app = express();

// Middleware
app.use(cors()); // Use cors middleware to allow cross-origin requests
app.use(bodyParser.json());

// Routes
app.use("/search", searchRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
