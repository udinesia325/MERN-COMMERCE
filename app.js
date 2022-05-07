const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const test = require("./routes/test")

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use("/api", test)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});