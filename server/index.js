const express = require("express");
const cors = require("cors");
const searchRouter = require("./services/search");

const app = express();

app.use(cors());

app.use("/search", searchRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
app.use("/", (req, res) => {
  res.send("server is running.");
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
