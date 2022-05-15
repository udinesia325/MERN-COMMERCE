const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
const authRoute = require("./routes/authRoute")
const productRoute = require("./routes/productRoute")
require("./routes/productRoute")
const mongoose = require("mongoose")
require("dotenv").config();
const path = require("path")
//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/api/auth",authRoute)
app.use("/api/product", productRoute)
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