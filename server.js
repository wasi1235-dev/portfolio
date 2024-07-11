const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname, "./client/build")));
//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//port
const PORT = process.env.PORT || 8080;

//listen

app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
