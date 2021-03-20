const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");

const app = express();

// parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting up the dotenv config
dotenv.config({
  path: "./.env",
});

// Setup the routing
// fs.readdirSync(`${__dirname}/routes`) // this returns an array of files in the directory
fs.readdirSync(`${__dirname}/routes`).map((file) => {
  require(`./routes/${file}`)(app);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log("Error: " + error);
    process.exit(1);
    return;
  }

  require("./utils/db");

  console.log(
    `Server listening in ${process.env.NODE_ENV} on port ${process.env.PORT}`
  );
});
