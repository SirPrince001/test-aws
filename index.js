require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/", (request, response) => {
  response.send(" Welcome to testing and host  API on aws ");
});

app.listen(port, () => {
  console.log(`APP is up and running on port ${port}`);
});
