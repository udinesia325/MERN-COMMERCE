const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
const test = require("./routes/test")
const mongoose = require("mongoose")
require("dotenv").config();

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use("/api", test)

app.listen(PORT, async () => {
  console.log(`Server Berjalan Pada Port ${PORT}`);
  console.log("Menunggu Koneksi Ke Database ...");
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database Terhubung!");
  }catch(err){
    console.log("Database Gagal Terhubung!");
    if(process.env.APP_STATUS == "dev"){
      console.log(err);
    }
  }
});