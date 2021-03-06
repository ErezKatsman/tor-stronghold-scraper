require("dotenv").config();
const app = require("./app");
const mongoose = require("./mongoose");
const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);
